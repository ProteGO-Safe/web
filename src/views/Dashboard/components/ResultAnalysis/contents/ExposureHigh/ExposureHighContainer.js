import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import ExposureHigh from './ExposureHigh';

const ExposureHighContainer = () => {
  const { goTo } = useNavigation();

  return (
    <ExposureHigh
      handlePickUpTest={() => goTo(Routes.LabTest)}
      handleRecommendation={() => goTo(Routes.Recommendations)}
      isInfected={false}
    />
  );
};

export default ExposureHighContainer;
