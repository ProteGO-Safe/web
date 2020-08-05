import React from 'react';
import ExposureNotificationWarning from './ExposureNotificationWarning';
import ScanningIcon from '../../../../assets/img/icons/scanning.gif';
import ExposureNotificationInfo from './ExposureNotificationInfo';
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
    return <ExposureNotificationInfo icon={ScanningIcon} />;
  }

  return (
    <>
      {isWebView() && showServiceWarning && (
        <ExposureNotificationWarning enableServices={handleEnableServices} />
      )}
      <FakeIcon icon={ScanningIcon} />
    </>
  );
};

export default ExposureNotificationWarningContainer;
