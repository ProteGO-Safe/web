import moment from 'moment';
import nativeBridge from '../../services/nativeBridge';
import * as types from '../types/nativeData';

export function saveInfoAboutFilledDiagnosis() {
  const timestamp = moment().unix();

  return () => {
    nativeBridge.setDiagnosisTimestamp(timestamp);
  };
}

export const fetchNotificationSuccess = notification => ({
  notification,
  type: types.NATIVE_DATA_FETCH_NOTIFICATION_SUCCESS
});

export function fetchNotification() {
  return dispatch => {
    nativeBridge.getNotification().then(notification => {
      if (notification) {
        dispatch(fetchNotificationSuccess(notification));
      }
    });
  };
}

export const hideNotificationSuccess = () => ({
  type: types.NATIVE_DATA_HIDE_NOTIFICATION_SUCCESS
});

export function hideNotification() {
  return dispatch => {
    dispatch(hideNotificationSuccess());
  };
}
