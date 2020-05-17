import React from 'react';
import { useSelector } from 'react-redux';
import { isIOSWebView } from '../../../../utils/native';
import { enableServices } from '../../../../store/actions/nativeData';
import { ExposureNotificationWarning } from './ExposureNotificationWarning';
import { EXPOSURE_NOTIFICATION_STATUS } from '../../../../utils/servicesStatus/servicesStatus.constants';

const ExposureNotificationWarningContainer = () => {
  const {
    servicesStatus: {
      isLocationOn,
      isBtOn,
      isNotificationEnabled,
      exposureNotificationStatus
    }
  } = useSelector(state => state.nativeData);
  const showServiceWarning =
    !(isIOSWebView() || isLocationOn) ||
    !isBtOn ||
    !isNotificationEnabled ||
    exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.OFF;

  const handleEnableServices = () => {
    const servicesState = {};
    if (!(isIOSWebView() || isLocationOn)) {
      servicesState.enableLocation = true;
    }
    if (!isBtOn) {
      servicesState.enableBt = true;
    }
    if (!isNotificationEnabled) {
      servicesState.enableNotification = true;
    }
    if (exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.OFF) {
      servicesState.enableExposureNotificationService = true;
    }
    enableServices(servicesState);
  };

  return (
    showServiceWarning && (
      <ExposureNotificationWarning enableServices={handleEnableServices} />
    )
  );
};

export default ExposureNotificationWarningContainer;
