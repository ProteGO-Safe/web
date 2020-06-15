import React from 'react';
import ExposureNotificationWarning from './ExposureNotificationWarning';
import { ExposureNotificationInfo } from './ExposureNotificationInfo';
import WifiIcon from '../../../../assets/img/icons/wifi.gif';
import { FakeIcon } from './FakeIcon';
import useSupportExposureNotificationTracing from '../../../../hooks/useSupportExposureNotificationTracing';
import { isWebView } from '../../../../utils/native';

const ExposureNotificationWarningContainer = () => {
  const {
    areEnableAllServices,
    showServiceWarning,
    handleEnableServices
  } = useSupportExposureNotificationTracing();

  if (areEnableAllServices) {
    return <ExposureNotificationInfo icon={WifiIcon} />;
  }

  return (
    <>
      {isWebView() && showServiceWarning && (
        <ExposureNotificationWarning enableServices={handleEnableServices} />
      )}
      <FakeIcon icon={WifiIcon} />
    </>
  );
};

export default ExposureNotificationWarningContainer;
