import * as types from '../types/app';
import { disableBluetoothModule } from './nativeData';

export const onboardingIOSBluetoothSummaryShowed = () => ({
  type: types.ONBOARDING_IOS_BLUETOOTH_SUMMARY_SHOWED
});

export function disagreeModuleBluetooth() {
  return dispatch => {
    dispatch(disableBluetoothModule());
  };
}

export function finishOnboarding() {
  return dispatch => {
    dispatch(onboardingIOSBluetoothSummaryShowed());
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
