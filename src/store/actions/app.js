import * as types from '../types/app';
import {
  changeNativeLanguage,
  clearBluetoothData,
  resetSourceSetServicesStatus
} from './nativeData';

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

export function clearApplicationState() {
  return async dispatch => {
    dispatch(clearBluetoothData());
    dispatch(applicationStateCleared());
  };
}

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
