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

export const fetchNativeServicesStatusSuccess = servicesStatus => {
  return {
    servicesStatus,
    type: types.NATIVE_DATA_FETCH_NATIVE_SERVICES_STATUS_SUCCESS
  };
};

export function fetchNativeServicesStatus() {
  return dispatch => {
    nativeBridge.getNativeServicesStatus().then(data => {
      dispatch(fetchNativeServicesStatusSuccess(data));
    });
  };
}

export function showNativeLocationPermission() {
  return () => {
    nativeBridge.showLocationPermission();
  };
}

export function showNativeBluetoothPermission() {
  return () => {
    nativeBridge.showBtPermission();
  };
}

export function showNativeBatteryOptimizationPermission() {
  return () => {
    nativeBridge.showBatteryOptimizationPermission();
  };
}

export function showNativeNotificationPermission() {
  return () => {
    nativeBridge.showNotificationPermission();
  };
}

export function enableBluetoothModule() {
  const data = { enableBtService: true };
  return () => {
    nativeBridge.setBluetoothModuleState(data);
  };
}

export function disableBluetoothModule() {
  const data = { enableBtService: false };
  return () => {
    nativeBridge.setBluetoothModuleState(data);
  };
}

export function clearBluetoothData() {
  const data = { clearBtData: true };
  return () => {
    nativeBridge.clearBluetoothData(data);
  };
}
