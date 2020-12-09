import * as types from '../../types/activities';
import { prepareActivities } from './activities.helpers';

const INITIAL_STATE = {
  activities: []
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LIST_ACTIVITIES_SUCCESS: {
      const {
        data: { notifications, riskChecks, exposures }
      } = action;
      const { activities = [] } = state;
      return {
        ...state,
        activities: prepareActivities(activities, notifications, riskChecks, exposures)
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
    default:
      return state;
  }
};

export default notificationReducer;
