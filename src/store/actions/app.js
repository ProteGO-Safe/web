import * as types from '../types/app';

export const onboardingFinished = () => ({
  type: types.ONBOARDING_FINISHED
});

export const exposureOnboardingFinished = () => ({
  type: types.EXPOSURE_ONBOARDING_FINISHED
});

export function finishExposureOnboarding() {
  return dispatch => {
    dispatch(exposureOnboardingFinished());
  };
}

export function finishOnboarding() {
  return dispatch => {
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
