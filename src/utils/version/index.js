import { EXPOSURE_NOTIFICATION_STATUS } from '../servicesStatus/servicesStatus.constants';

export const isVersionCompatibilityWithBluetoothModule = (
  servicesStatus = {}
) => {
  if (Object.keys(servicesStatus).length === 0) {
    return false;
  }
  const { exposureNotificationStatus } = servicesStatus;

  if (
    exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.NOT_SUPPORTED
  ) {
    return false;
  }
  return true;
};
