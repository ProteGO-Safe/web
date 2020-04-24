import { isAndroidWebView, isIOSWebView } from '../native';

export const showOnboarding = (
  servicesStatus = {},
  onboardingFinished = false
  // onboardingBluetoothPermissionShowed = false,
  // onboardingNotificationPermissionShowed = false,
  // iosBluetoothSummaryShowed = false
) => {
  const {
    isBtSupported,
    isLocationEnabled,
    isBtOn,
    isBatteryOptimizationOn,
    // isNotificationEnabled,
    isBtServiceOn
  } = servicesStatus;

  if (!isBtSupported) {
    return false;
  }
  if (isAndroidWebView()) {
    if (!!isLocationEnabled && !!isBtOn && !isBatteryOptimizationOn && onboardingFinished) {
      return false;
    }
  }

  if (isIOSWebView()) {
    return false;
    // if (!!isBtOn && !iosBluetoothSummaryShowed) {
    //   return true;
    // }
    // if (!!isBtOn && !!isNotificationEnabled) {
    //   return false;
    // }
    // if (
    //   onboardingBluetoothPermissionShowed &&
    //   onboardingNotificationPermissionShowed
    // ) {
    //   return false;
    // }
  }

  console.log(`onboardingFinished: ${onboardingFinished}`)


  if (!onboardingFinished) {
    return true;
  }

  if (!isBtServiceOn) {
    return false;
  }

  return true;
};
