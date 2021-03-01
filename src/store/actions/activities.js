import nativeBridge from '../../services/nativeBridge';
import * as types from '../types/activities';

export const listActivitiesSuccess = data => ({
  data,
  type: types.LIST_ACTIVITIES_SUCCESS
});

const mapToId = ({ id }) => id;

export const fetchActivities = () => {
  return dispatch => {
    nativeBridge.listActivities().then(body => {
      if (body) {
        const { notifications = [], riskChecks = [], exposures = [] } = body;
        const fetchedIds = {
          notifications: notifications.map(mapToId),
          riskChecks: riskChecks.map(mapToId),
          exposures: exposures.map(mapToId)
        };
        const data = { notifications, riskChecks, exposures, fetchedIds };
        dispatch(listActivitiesSuccess(data));
        nativeBridge.confirmActivities(fetchedIds);
      }
    });
  };
};

export const markActivityAsRead = id => ({
  data: { id },
  type: types.MARK_ACTIVITY_AS_READ
});

export const markAllActivitiesAsRead = () => ({
  type: types.MARK_ALL_ACTIVITIES_AS_READ
});
