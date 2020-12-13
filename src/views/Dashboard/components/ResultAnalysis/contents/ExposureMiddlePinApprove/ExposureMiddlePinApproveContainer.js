import React from 'react';
import ExposureMiddlePinApprove from './ExposureMiddlePinApprove';

const ExposureMiddlePinApproveContainer = () => {
  return (
    <ExposureMiddlePinApprove
      dateLastRiskTest="13.10.2020, 12:23"
      dateRiskMonitoring="05.12.2020, 13:44"
      handleInstallApp={() => null}
      handleLabTestResult={() => null}
      handleRecommendation={() => null}
      isInfected
    />
  );
};

export default ExposureMiddlePinApproveContainer;
