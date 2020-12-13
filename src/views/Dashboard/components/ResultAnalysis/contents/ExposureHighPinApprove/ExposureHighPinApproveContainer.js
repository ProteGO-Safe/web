import React from 'react';
import ExposureHighPinApprove from './ExposureHighPinApprove';

const ExposureHighPinApproveContainer = () => {
  return (
    <ExposureHighPinApprove
      dateLastRiskTest="13.10.2020, 12:23"
      dateRiskMonitoring="05.12.2020, 13:44"
      handleInstallApp={() => null}
      handleLabTestResult={() => null}
      handleRecommendation={() => null}
      isInfected
    />
  );
};

export default ExposureHighPinApproveContainer;
