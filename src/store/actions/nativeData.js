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

export const fetchExposureNotificationStatisticsSuccess = riskLevel => ({
  riskLevel,
  type: types.NATIVE_DATA_FETCH_EXPOSURE_NOTIFICATION_STATISTICS_SUCCESS
});

export function fetchExposureNotificationStatistics() {
  return dispatch => {
    nativeBridge.getExposureNotificationStatistics().then(riskLevel => {
      if (riskLevel) {
        dispatch(fetchExposureNotificationStatisticsSuccess(riskLevel));
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

export function enableExposureNotificationService() {
  const data = { enableExposureNotificationService: true };
  nativeBridge.setServicesState(data);
}

export function disableExposureNotificationService() {
  const data = { enableExposureNotificationService: false };
  nativeBridge.setServicesState(data);
}

export function enableNotification() {
  const data = { enableNotification: true };
  nativeBridge.setServicesState(data);
}

export const resetSourceSetServicesStatus = () => ({
  type: types.NATIVE_DATA_SET_SERVICE_STATUS_SOURCE_RESETED
});

export function enableServices(data) {
  nativeBridge.setServicesState(data);
}

export function clearNativeAllData() {
  const data = { clearAll: true };
  nativeBridge.clearAllData(data);
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

export const fetchNativeVersionSuccess = body => ({
  body,
  type: types.FETCH_VERSION_SUCCESS
});

export function fetchNativeVersion() {
  return dispatch => {
    nativeBridge.getNativeVersion().then(body => {
      if (body) {
        dispatch(fetchNativeVersionSuccess(body));
      }
    });
  };
}

export const fetchLanguageSuccess = body => ({
  body,
  type: types.FETCH_LANGUAGE
});

export function fetchLanguage() {
  return dispatch => {
    nativeBridge.getLanguage().then(body => {
      if (body) {
        dispatch(fetchLanguageSuccess(body));
      }
    });
  };
}

export const fetchLabTestSubscriptionSuccess = body => ({
  body,
  type: types.FETCH_LAB_TEST_SUBSCRIPTION
});

export const fetchLabTestSubscription = () => {
  return dispatch => {
    nativeBridge.getLabTestSubscription().then(body => {
      if (body) {
        dispatch(fetchLabTestSubscriptionSuccess(body));
      }
    });
  };
}

export function changeNativeLanguage(language) {
  const data = { language: language.toUpperCase() };
  return () => {
    nativeBridge.changeLanguage(data);
  };
}

export const resetUploadTestPinResultSuccess = () => ({
  type: types.RESET_UPLOAD_TEST_PIN_RESULT_SUCCESS
});

export const resetUploadTestPinResult = () => {
  return dispatch => dispatch(resetUploadTestPinResultSuccess());
};

export const uploadTestPinFinished = body => ({
  body,
  type: types.UPLOAD_TEST_PIN_FINISHED
});

export const uploadTestPin = pin => {
  return dispatch => {
    dispatch(resetUploadTestPinResultSuccess())
    nativeBridge.uploadTestPin(pin).then(body => {
      dispatch(uploadTestPinFinished(body));
    });
  };
};
