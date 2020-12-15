import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import ExposureHighPinApprove from './ExposureHighPinApprove';

const ExposureHighPinApproveContainer = () => {
  const { goTo } = useNavigation();

  return (
    <ExposureHighPinApprove
      handleInstallApp={() => null}
      handleLabTestResult={() => goTo(Routes.LabTestResult)}
      handleRecommendation={() => goTo(Routes.Recommendations)}
      isInfected
    />
  );
};

export default ExposureHighPinApproveContainer;
