import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import ExposureHigh from './ExposureHigh';

const ExposureHighContainer = () => {
  const { goTo } = useNavigation();

  return (
    <ExposureHigh
      dateLastRiskTest="13.10.2020, 12:23"
      dateRiskMonitoring="05.12.2020, 13:44"
      handlePickUpTest={() => null}
      handleRecommendation={() => goTo(Routes.Recommendations)}
      isInfected={false}
    />
  );
};

export default ExposureHighContainer;
