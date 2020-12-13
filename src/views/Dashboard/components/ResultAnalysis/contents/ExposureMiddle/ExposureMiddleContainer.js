import React from 'react';
import ExposureMiddle from './ExposureMiddle';

const ExposureMiddleContainer = () => {
  return (
    <ExposureMiddle
      dateLastRiskTest="13.10.2020, 12:23"
      dateRiskMonitoring="05.12.2020, 13:44"
      handlePickUpTest={() => null}
      handleRecommendation={() => null}
      isInfected={false}
    />
  );
};

export default ExposureMiddleContainer;
