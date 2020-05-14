import { isVersionCompatibilityWithBluetoothModule } from '../version';
import { EXPOSURE_NOTIFICATION_STATUS } from './servicesStatus.constants';

export const showOnboarding = (servicesStatus = {}) => {
  const {
    exposureNotificationStatus = EXPOSURE_NOTIFICATION_STATUS.NOT_SUPPORTED
  } = servicesStatus;

  if (!isVersionCompatibilityWithBluetoothModule(servicesStatus)) {
    return false;
  }

  return exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.OFF;
};
