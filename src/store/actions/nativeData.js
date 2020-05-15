import moment from 'moment';
import nativeBridge from '../../services/nativeBridge';
import * as types from '../types/nativeData';
import {
  UPLOAD_HISTORICAL_DATA_ENDED,
  UPLOAD_HISTORICAL_DATA_REQUESTED
} from '../types/app';

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

export const fetchServicesStatusSuccess = servicesStatus => ({
  servicesStatus,
  type: types.NATIVE_DATA_FETCH_SERVICES_STATUS_SUCCESS
});

export function fetchServicesStatus() {
  return dispatch => {
    nativeBridge.getServicesStatus().then(servicesStatus => {
      if (servicesStatus) {
        dispatch(fetchServicesStatusSuccess(servicesStatus));
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

export function enableBt() {
  const data = { enableBt: true };
  return () => {
    nativeBridge.setServicesState(data);
  };
}

export function enableLocation() {
  const data = { enableLocation: true };
  return () => {
    nativeBridge.setServicesState(data);
  };
}

export function enableExposureNotificationService() {
  const data = { enableExposureNotificationService: true };
  return () => {
    nativeBridge.setServicesState(data);
  };
}

export function enableNotification() {
  const data = { enableNotification: true };
  return () => {
    nativeBridge.setServicesState(data);
  };
}

export function clearBluetoothData() {
  const data = { clearBtData: true };
  return () => {
    nativeBridge.clearBluetoothData(data);
  };
}

export const uploadHistoricalDataRequested = () => ({
  type: UPLOAD_HISTORICAL_DATA_REQUESTED
});

export function uploadHistoricalData({ pin }) {
  return dispatch => {
    dispatch(uploadHistoricalDataRequested());
    nativeBridge.setPin(pin);
  };
}

export const uploadHistoricalDataEnded = () => ({
  type: UPLOAD_HISTORICAL_DATA_ENDED
});

export function endUploadHistoricalData() {
  return async dispatch => {
    dispatch(uploadHistoricalDataEnded());
  };
}
