import * as types from '../types/app';
import { resetSourceSetServicesStatus } from './nativeData';

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
