import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import ExposureMiddle from './ExposureMiddle';
import useNavigation from '../../../../../../hooks/useNavigation';

const ExposureMiddleContainer = () => {
  const { goTo } = useNavigation();

  return (
    <ExposureMiddle
      dateLastRiskTest="13.10.2020, 12:23"
      dateRiskMonitoring="05.12.2020, 13:44"
      handlePickUpTest={() => null}
      handleRecommendation={() => goTo(Routes.Recommendations)}
      isInfected={false}
    />
  );
};

export default ExposureMiddleContainer;
