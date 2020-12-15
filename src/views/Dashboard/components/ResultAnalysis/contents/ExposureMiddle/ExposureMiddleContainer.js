import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import ExposureMiddle from './ExposureMiddle';
import useNavigation from '../../../../../../hooks/useNavigation';

const ExposureMiddleContainer = () => {
  const { goTo } = useNavigation();

  return (
    <ExposureMiddle
      handlePickUpTest={() => goTo(Routes.LabTest)}
      handleRecommendation={() => goTo(Routes.Recommendations)}
      isInfected={false}
    />
  );
};

export default ExposureMiddleContainer;
