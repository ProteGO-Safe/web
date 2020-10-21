import * as types from '../types/app';
import {
  changeNativeLanguage,
  resetSourceSetServicesStatus
} from './nativeData';
import nativeBridge from '../../services/nativeBridge';

export const onboardingFinished = () => ({
  type: types.ONBOARDING_FINISHED
});

export const exposureOnboardingFinished = () => ({
  type: types.EXPOSURE_ONBOARDING_FINISHED
});

export function finishExposureOnboarding() {
  return dispatch => {
    dispatch(resetSourceSetServicesStatus());
    dispatch(exposureOnboardingFinished());
  };
}

export function finishOnboarding() {
  return dispatch => {
    dispatch(resetSourceSetServicesStatus());
    dispatch(onboardingFinished());
  };
}

export const startScreenShowed = () => ({
  type: types.START_SCREEN_SHOWED
});

export function showStartScreenSuccess() {
  return dispatch => {
    dispatch(startScreenShowed());
  };
}

export const firstDiagnosisFinished = () => ({
  type: types.FIRST_DIAGNOSIS_FINISHED
});

export function finishFirstDiagnosis() {
  return async dispatch => {
    dispatch(firstDiagnosisFinished());
  };
}

export const applicationStateCleared = () => ({
  type: types.APP_STATE_CLEARED
});

export const clearApplicationState = () => {
  return dispatch => {
    dispatch(applicationStateCleared());
  };
};

export const bluetoothDataCleared = () => ({
  type: types.BLUETOOTH_DATA_CLEARED
});

export const clearBluetoothData = () => {
  return dispatch => {
    dispatch(bluetoothDataCleared());
  };
};

export const dataFromNewestVersionMarked = () => ({
  type: types.DATA_FROM_NEWEST_VERSION_MARKED
});

export function markDataFromNewestVersion() {
  return dispatch => {
    dispatch(onboardingFinished());
    dispatch(firstDiagnosisFinished());
    dispatch(dataFromNewestVersionMarked());
  };
}

export const migrationFinished = data => ({
  data,
  type: types.MIGRATION_FINISHED
});

export function finishMigration(data) {
  return dispatch => {
    dispatch(migrationFinished(data));
  };
}
export const languageChanged = data => ({
  data,
  type: types.LANGUAGE_CHANGED
});

export function changeLanguage(data) {
  return dispatch => {
    dispatch(languageChanged(data));
    dispatch(changeNativeLanguage(data));
  };
}

export const uploadHistoricalDataErrorMessageHidden = () => ({
  type: types.UPLOAD_HISTORICAL_DATA_ERROR_MESSAGE_HIDDEN
});

export const hideUploadHistoricalDataErrorMessage = () => {
  return dispatch => {
    dispatch(uploadHistoricalDataErrorMessageHidden());
  };
};

export const registrationFinished = () => ({
  type: types.REGISTRATION_FINISHED
});

export const fontScaleFetched = data => ({
  data,
  type: types.FONT_SCALE_FETCHED
});

export const fetchFontScale = () => {
  return dispatch => {
    nativeBridge.getFontScale().then(data => {
      if (data) {
        dispatch(fontScaleFetched(data));
      }
    });
  };
};
