import * as types from '../../types/activities';
import { prepareActivities } from './activities.helpers';

const INITIAL_STATE = {
  activities: [],
  fetchedIds: {
    notifications: [],
    riskChecks: [],
    exposures: []
  }
};

const prepareFetchedIds = (fetchedIds = {}, newFetchedIds = {}) => {
  const {
    notifications: notificationsIds = [],
    riskChecks: riskChecksIds = [],
    exposures: exposuresIds = []
  } = fetchedIds;
  const {
    notifications: newNotificationsIds = [],
    riskChecks: newRiskChecksIds = [],
    exposures: newExposuresIds = []
  } = newFetchedIds;
  return {
    notifications: [...notificationsIds, ...newNotificationsIds],
    riskChecks: [...riskChecksIds, ...newRiskChecksIds],
    exposures: [...exposuresIds, ...newExposuresIds]
  };
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LIST_ACTIVITIES_SUCCESS: {
      const {
        data: { notifications, riskChecks, exposures, fetchedIds: newFetchedIds }
      } = action;
      const { activities = [], fetchedIds = {} } = state;
      return {
        ...state,
        activities: prepareActivities(activities, notifications, riskChecks, exposures, fetchedIds),
        fetchedIds: prepareFetchedIds(fetchedIds, newFetchedIds)
      };
    }
    case types.MARK_ACTIVITY_AS_READ: {
      const {
        data: { id }
      } = action;
      const { activities = [] } = state;
      const activity = activities.filter(({ id: id_ }) => id_ === id)[0];
      activity.isRead = true;

      return {
        ...state,
        activities: [...activities]
      };
    }
    case types.MARK_ALL_ACTIVITIES_AS_READ: {
      const { activities = [] } = state;

      return {
        ...state,
        activities: [...activities.map(activity => ({ ...activity, isRead: true }))]
      };
    }
    default:
      return state;
  }
};

export default notificationReducer;
