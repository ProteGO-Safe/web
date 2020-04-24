import * as types from '../types/app';
import { disableBluetoothModule, enableBluetoothModule } from './nativeData';

export const onboardingIOSBluetoothSummaryShowed = () => ({
  type: types.ONBOARDING_IOS_BLUETOOTH_SUMMARY_SHOWED
});

export const onboardingFinished = () => ({
  type: types.ONBOARDING_FINISHED
});

export function disagreeModuleBluetooth() {
  return dispatch => {
    dispatch(onboardingFinished());
    dispatch(disableBluetoothModule());
  };
}

export function finishOnboarding() {
  return dispatch => {
    dispatch(onboardingIOSBluetoothSummaryShowed());
    dispatch(onboardingFinished());
    dispatch(enableBluetoothModule());
  };
}

export const onboardingNotificationPermissionShowed = () => ({
  type: types.ONBOARDING_NOTIFICATION_PERMISSION_SHOWED
});

export function showOnboardingNotificationPermission() {
  return dispatch => {
    dispatch(onboardingNotificationPermissionShowed());
  };
}

export const onboardingBluetoothPermissionShowed = () => ({
  type: types.ONBOARDING_BLUETOOTH_PERMISSION_SHOWED
});

export function showOnboardingBluetoothPermission() {
  return dispatch => {
    dispatch(onboardingBluetoothPermissionShowed());
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

