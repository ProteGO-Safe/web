import React from 'react';
import { useSelector } from 'react-redux';
import { isIOSWebView } from '../../../../utils/native';
import { enableServices } from '../../../../store/actions/nativeData';
import { ExposureNotificationWarning } from './ExposureNotificationWarning';

const ExposureNotificationWarningContainer = () => {
  const {
    servicesStatus: { isLocationOn, isBtOn, isNotificationEnabled }
  } = useSelector(state => state.nativeData);
  const showServiceWarning =
    !(isIOSWebView() || isLocationOn) || !isBtOn || !isNotificationEnabled;

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
    enableServices(servicesState);
  };

  return (
    showServiceWarning && (
      <ExposureNotificationWarning enableServices={handleEnableServices} />
    )
  );
};

export default ExposureNotificationWarningContainer;
