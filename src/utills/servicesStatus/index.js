import { isVersionCompatibilityWithBluetoothModule } from '../version';

export const showOnboarding = (
  servicesStatus = {},
  onboardingFinished = false
) => {
  const { isBtSupported } = servicesStatus;

  if (!isVersionCompatibilityWithBluetoothModule(servicesStatus)) {
    return false;
  }

  if (!isBtSupported) {
    return false;
  }

  if (!onboardingFinished) {
    return true;
  }

  return true;
};
