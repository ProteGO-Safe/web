import React from 'react';
import ExposureHigh from './ExposureHigh';

const ExposureHighContainer = () => {
  return (
    <ExposureHigh
      dateLastRiskTest="13.10.2020, 12:23"
      dateRiskMonitoring="05.12.2020, 13:44"
      handlePickUpTest={() => null}
      handleRecommendation={() => null}
      isInfected={false}
    />
  );
};

export default ExposureHighContainer;
