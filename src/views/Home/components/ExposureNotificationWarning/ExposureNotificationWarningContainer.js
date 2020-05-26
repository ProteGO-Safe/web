import React from 'react';
import { ExposureNotificationWarning } from './ExposureNotificationWarning';
import { ExposureNotificationInfo } from './ExposureNotificationInfo';
import WifiIcon from '../../../../assets/img/icons/wifi.gif';
import { FakeIcon } from './FakeIcon';
import useSupportExposureNotificationTracing from '../../../../hooks/useSupportExposureNotificationTracing';

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
      {showServiceWarning && (
        <ExposureNotificationWarning enableServices={handleEnableServices} />
      )}
      <FakeIcon icon={WifiIcon} />
    </>
  );
};

export default ExposureNotificationWarningContainer;
