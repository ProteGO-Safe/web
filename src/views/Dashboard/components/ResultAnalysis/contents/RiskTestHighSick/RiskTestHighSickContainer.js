import React from 'react';
import { useSelector } from 'react-redux';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import RiskTestHighSick from './RiskTestHighSick';
import { getExposureAggregateStatistics } from '../../../../../../store/selectors/nativeData';
import { getFormattedDate } from '../../../../../../utils/date';

const RiskTestHighSickContainer = () => {
  const { goTo } = useNavigation();
  const { lastRiskCheckTimestamp } = useSelector(getExposureAggregateStatistics);

  return (
    <RiskTestHighSick
      currentState="result_analysis_variant_4"
      dateLastRiskTest={getFormattedDate(lastRiskCheckTimestamp)}
      isInfected={false}
      handleRecommendation={() => goTo(Routes.Recommendations)}
    />
  );
};

export default RiskTestHighSickContainer;
