import React from 'react';
import { useSelector } from 'react-redux';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import RiskTestHigh from './RiskTestHigh';
import { getExposureAggregateStatistics } from '../../../../../../store/selectors/nativeData';
import { getFormattedDate } from '../../../../../../utils/date';
import { RecommendationsComponents } from '../../../../../Recommendations/recommendations.constant';

const RiskTestHighContainer = () => {
  const { goTo } = useNavigation();
  const { lastRiskCheckTimestamp } = useSelector(getExposureAggregateStatistics);

  return (
    <RiskTestHigh
      currentState="result_analysis_variant_4"
      dateLastRiskTest={getFormattedDate(lastRiskCheckTimestamp)}
      isInfected={false}
      handleRecommendation={() => goTo(Routes.Recommendations, { component: RecommendationsComponents.RiskTestHigh })}
    />
  );
};

export default RiskTestHighContainer;
