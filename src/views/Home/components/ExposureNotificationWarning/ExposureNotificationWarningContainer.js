import React from 'react';
import { useSelector } from 'react-redux';
import { isIOSWebView } from '../../../../utils/native';
import { enableServices } from '../../../../store/actions/nativeData';
import { ExposureNotificationWarning } from './ExposureNotificationWarning';
import { EXPOSURE_NOTIFICATION_STATUS } from '../../../../utils/servicesStatus/servicesStatus.constants';
import { ExposureNotificationInfo } from './ExposureNotificationInfo';
import WifiIcon from '../../../../assets/img/icons/wifi.gif';
import { FakeIcon } from './FakeIcon';

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
    (!isIOSWebView() && isLocationOn === false) ||
    isBtOn === false ||
    isNotificationEnabled === false ||
    exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.OFF;

  const showEnableServicesInfo =
    !isIOSWebView() &&
    isLocationOn &&
    isBtOn &&
    isNotificationEnabled &&
    exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.ON;

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

  if (showEnableServicesInfo) {
    return <ExposureNotificationInfo icon={WifiIcon} />;
  }

  return (
    <>
      {showServiceWarning && (
        <ExposureNotificationWarning enableServices={handleEnableServices} />
      )}
      <FakeIcon icon={WifiIcon} />
    </>
  );
};

export default ExposureNotificationWarningContainer;
