import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import ExposureMiddlePinApprove from './ExposureMiddlePinApprove';

const ExposureMiddlePinApproveContainer = () => {
  const { goTo } = useNavigation();

  return (
    <ExposureMiddlePinApprove
      handleInstallApp={() => null}
      handleLabTestResult={() => goTo(Routes.LabTestResult)}
      handleRecommendation={() => goTo(Routes.Recommendations)}
      isInfected
    />
  );
};

export default ExposureMiddlePinApproveContainer;
