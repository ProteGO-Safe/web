import React from 'react';
import { useSelector } from 'react-redux';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import RiskTestMiddle from './RiskTestMiddle';
import { getExposureAggregateStatistics } from '../../../../../../store/selectors/nativeData';
import { getFormattedDate } from '../../../../../../utils/date';

const RiskTestMiddleContainer = () => {
  const { goTo } = useNavigation();
  const { lastRiskCheckTimestamp } = useSelector(getExposureAggregateStatistics);

  return (
    <RiskTestMiddle
      currentState="result_analysis_variant_3"
      dateLastRiskTest={getFormattedDate(lastRiskCheckTimestamp)}
      isInfected={false}
      handleRecommendation={() => goTo(Routes.Recommendations)}
    />
  );
};

export default RiskTestMiddleContainer;
