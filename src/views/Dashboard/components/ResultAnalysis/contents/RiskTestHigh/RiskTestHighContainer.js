import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import RiskTestHigh from './RiskTestHigh';

const RiskTestHighContainer = () => {
  const { goTo } = useNavigation();

  return (
    <RiskTestHigh
      currentState="result_analysis_variant_4"
      dateLastRiskTest="13.10.2020, 12:23"
      dateRiskMonitoring="05.12.2020, 13:44"
      isInfected={false}
      handleRecommendation={() => goTo(Routes.Recommendations)}
    />
  );
};

export default RiskTestHighContainer;
