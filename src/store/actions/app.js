import * as types from '../types/app';
import { disableBluetoothModule, enableBluetoothModule } from './nativeData';

export const onboardingFinished = () => ({
  type: types.ONBOARDING_FINISHED
});

export function disagreeModuleBluetooth() {
  return dispatch => {
    dispatch(onboardingFinished());
    dispatch(disableBluetoothModule());
  };
}

export function finishOnboardingAndEnableBluetoothModule() {
  return dispatch => {
    dispatch(enableBluetoothModule());
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
