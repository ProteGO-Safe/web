import * as types from '../types/app';

export const onboardingInformationShowed = () => ({
  type: types.ONBOARDING_INFORMATION_SHOWED
});

export const onboardingIOSBluetoothSummaryShowed = () => ({
  type: types.ONBOARDING_IOS_BLUETOOTH_SUMMARY_SHOWED
});

export const onboardingInformationShowReseted = () => ({
  type: types.ONBOARDING_INFORMATION_SHOW_RESETED
});

export function resetOnboardingInformationShowed() {
  return dispatch => {
    dispatch(onboardingInformationShowReseted());
  };
}

export function disagreeModuleBluetooth() {
  return dispatch => {
    dispatch(onboardingInformationShowed());
  };
}

export function finishOnboarding() {
  return dispatch => {
    dispatch(onboardingInformationShowed());
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
