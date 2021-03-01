import { v4 } from 'uuid';
import { not } from 'ramda';
import orderby from 'lodash.orderby';
import { getFormattedDateWithoutTime as getDate } from '../../../utils/date';
import { ACTIVITY_TYPE as TYPE } from '../../../constants';

const sortByTimestamp = array => orderby(array, ['timestamp'], ['desc']);

const createActivityFromNativeNotification = ({ title, content, timestamp }) => {
  return {
    id: v4(),
    isRead: false,
    title,
    type: TYPE.NOTIFICATION,
    content,
    timestamp,
    riskChecks: [],
    riskLevel: 0
  };
};

const createActivityFromNativeExposure = ({ riskLevel, timestamp }) => {
  return {
    id: v4(),
    isRead: false,
    title: '',
    type: TYPE.EXPOSURE,
    content: '',
    timestamp,
    riskChecks: [],
    riskLevel
  };
};

const createRiskCheckItem = ({ keys, exposures, timestamp }) => ({ keys, exposures, timestamp });

const createRiskCheck = nativeRiskCheck => {
  const { timestamp } = nativeRiskCheck;
  return {
    id: v4(),
    isRead: false,
    title: '',
    type: TYPE.RISK_CHECK,
    content: '',
    timestamp,
    riskChecks: [createRiskCheckItem(nativeRiskCheck)],
    riskLevel: 0
  };
};

const mergeRiskChecksItems = (riskChecks = [], existingItem, nativeRiskCheck) => {
  const array = riskChecks.filter(
    ({ timestamp: timestamp_ }) => getDate(timestamp_) !== getDate(existingItem.timestamp)
  );

  const mergedRiskChecks = sortByTimestamp([...existingItem.riskChecks, createRiskCheckItem(nativeRiskCheck)]);
  const theGreatestTimestamp = mergedRiskChecks.map(({ timestamp }) => timestamp)[0];

  return [...array, { ...existingItem, timestamp: theGreatestTimestamp, riskChecks: mergedRiskChecks }];
};

const createRiskChecks = (nativeRiskChecks = []) => {
  return nativeRiskChecks.reduce((array = [], nativeRiskCheck) => {
    const existingItem = array.find(({ timestamp }) => getDate(timestamp) === getDate(nativeRiskCheck.timestamp));
    if (existingItem) {
      return mergeRiskChecksItems(array, existingItem, nativeRiskCheck);
    }

    return [...array, createRiskCheck(nativeRiskCheck)];
  }, []);
};

const fetchDaysToProcess = (nativeRiskChecks = [], currentActivities = []) => {
  const allExistingDays = currentActivities
    .map(({ riskChecks }) => riskChecks)
    .flat(1)
    .map(({ timestamp }) => getDate(timestamp));
  return nativeRiskChecks.map(({ timestamp }) => getDate(timestamp)).filter(day => allExistingDays.includes(day));
};

const prepareActivitiesWithRiskChecks = (nativeRiskChecks = [], currentActivities = []) => {
  const daysToProcess = fetchDaysToProcess(nativeRiskChecks, currentActivities);
  if (daysToProcess.length === 0) {
    return { activities: currentActivities, restNativeRiskChecks: nativeRiskChecks };
  }
  const activities = currentActivities.map(activity => {
    const { riskChecks, timestamp: activityTimestamp, type } = activity;

    if (type !== TYPE.RISK_CHECK || !daysToProcess.includes(getDate(activityTimestamp))) {
      return activity;
    }
    const day = getDate(riskChecks[0].timestamp);

    const mergedRiskChecks = sortByTimestamp([
      ...riskChecks,
      ...nativeRiskChecks.filter(({ timestamp }) => getDate(timestamp) === day).map(createRiskCheckItem)
    ]);
    const theGreatestTimestamp = mergedRiskChecks.map(({ timestamp }) => timestamp)[0];

    return {
      ...activity,
      isRead: false,
      riskChecks: mergedRiskChecks,
      timestamp: theGreatestTimestamp
    };
  });

  const restNativeRiskChecks = nativeRiskChecks.filter(({ timestamp }) => {
    const date = getDate(timestamp);
    return !daysToProcess.some(day => day === date);
  });

  return { activities, restNativeRiskChecks };
};

export const prepareActivities = (
  currentActivities = [],
  nativeNotifications = [],
  nativeRiskChecks = [],
  nativeExposures = [],
  fetchedIds = {}
) => {
  const {
    notifications: notificationsIds = [],
    riskChecks: riskChecksIds = [],
    exposures: exposuresIds = []
  } = fetchedIds;
  const { activities, restNativeRiskChecks } = prepareActivitiesWithRiskChecks(
    nativeRiskChecks.filter(({ id }) => not(riskChecksIds.includes(id))),
    currentActivities
  );

  return sortByTimestamp([
    ...activities,
    ...nativeNotifications
      .filter(({ id }) => not(notificationsIds.includes(id)))
      .map(createActivityFromNativeNotification),
    ...nativeExposures
      .filter(({ riskLevel }) => riskLevel > 0)
      .filter(({ id }) => not(exposuresIds.includes(id)))
      .map(createActivityFromNativeExposure),
    ...createRiskChecks(restNativeRiskChecks)
  ]);
};
