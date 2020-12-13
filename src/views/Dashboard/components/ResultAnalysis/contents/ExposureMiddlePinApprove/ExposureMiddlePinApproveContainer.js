import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import ExposureMiddlePinApprove from './ExposureMiddlePinApprove';

const ExposureMiddlePinApproveContainer = () => {
  const { goTo } = useNavigation();

  return (
    <ExposureMiddlePinApprove
      dateLastRiskTest="13.10.2020, 12:23"
      dateRiskMonitoring="05.12.2020, 13:44"
      handleInstallApp={() => null}
      handleLabTestResult={() => null}
      handleRecommendation={() => goTo(Routes.Recommendations)}
      isInfected
    />
  );
};

export default ExposureMiddlePinApproveContainer;
