import React from 'react';
import RiskTestMiddle from './RiskTestMiddle';

const RiskTestMiddleContainer = () => {
  return (
    <RiskTestMiddle
      currentState="result_analysis_variant_3"
      dateLastRiskTest="13.10.2020, 12:23"
      dateRiskMonitoring="05.12.2020, 13:44"
      isInfected={false}
      onClick={() => null}
    />
  );
};

export default RiskTestMiddleContainer;
