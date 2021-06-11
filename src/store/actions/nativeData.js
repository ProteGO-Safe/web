import moment from 'moment';
import nativeBridge from '../../services/nativeBridge';
import * as types from '../types/nativeData';
import { UPLOAD_HISTORICAL_DATA_ENDED, UPLOAD_HISTORICAL_DATA_REQUESTED } from '../types/app';

export function saveInfoAboutFilledDiagnosis() {
  const timestamp = moment().unix();

  return () => {
    nativeBridge.setDiagnosisTimestamp(timestamp);
  };
}

export const fetchServicesStatusSuccess = servicesStatus => ({
  servicesStatus,
  type: types.NATIVE_DATA_FETCH_SERVICES_STATUS_SUCCESS
});

export const fetchServicesStatus = () => {
  return dispatch => {
    nativeBridge.getServicesStatus().then(servicesStatus => {
      if (servicesStatus) {
        dispatch(fetchServicesStatusSuccess(servicesStatus));
      }
    });
  };
}

export const enStatusReceived = riskLevel => ({
  data: { riskLevel },
  type: types.EN_STATUS_RECEIVED
});

export function fetchExposureNotificationStatistics() {
  return dispatch => {
    nativeBridge.getExposureNotificationStatistics().then(data => {
      if (data) {
        const { riskLevel } = data;
        dispatch(enStatusReceived(riskLevel));
      }
    });
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

export function uploadHistoricalData(pin, isInteroperabilityEnabled) {
  return dispatch => {
    dispatch(uploadHistoricalDataRequested());
    nativeBridge.uploadHistoricalData({ pin, isInteroperabilityEnabled });
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
};

export function changeNativeLanguage(language) {
  const data = { language: language.toUpperCase() };
  return () => {
    nativeBridge.changeLanguage(data);
  };
}

export const uploadTestPinFinished = body => ({
  body,
  type: types.UPLOAD_LAB_TEST_PIN_FINISHED
});

export const uploadLabTestPin = pin => {
  return async dispatch => {
    const result = await nativeBridge.uploadLabTestPin(pin);
    dispatch(uploadTestPinFinished(result));
    return result;
  };
};

export const revokeEnStatus = () => {
  return async dispatch => {
    await nativeBridge.revokeEnStatus().then(data => {
      const { riskLevel } = data;
      dispatch(enStatusReceived(riskLevel));
    });
  };
};
