import { not } from 'ramda';

export const getExposureAggregateStatistics = state => state.statistics.exposureAggregate || {};

export const getStatisticsSummary = state => state.statistics.summary || {};

export const getExistsDetailsStatistics = state => state.statistics.details !== undefined;
export const getVoivodeshipsData = state => {
  if (not(state.statistics.details)) {
    return [];
  }
  return state.statistics.details.voivodeships;
};

export const getLastTwoWeeks = state => propertyName => {
  if (not(state.statistics.details)) {
    return undefined;
  }
  const values = state.statistics.details.lastDays[propertyName];

  if (not(values)) {
    return undefined;
  }

  const { length } = values;

  if (length <= 14) {
    return values;
  }

  return values.slice(length - 14, length);
};

export const getDistrictsData = state => {
  if (not(state.statistics.details)) {
    return [];
  }
  return state.statistics.details.voivodeships.reduce((total, voivodeship) => {
    return [...total, ...voivodeship.districts];
  }, []);
};

export const getSubscribedDistrictsData = state => {
  const { subscribedDistricts } = state.restrictions;

  return getDistrictsData(state).filter(district => {
    return subscribedDistricts.find(subscribedDistrict => subscribedDistrict.id === district.uiId);
  });
};

export const getUpdateDate = state => {
  if (not(state.statistics.details)) {
    return undefined;
  }
  return state.statistics.details.updated;
};
