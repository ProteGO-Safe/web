import React from 'react';
import {Routes} from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import RiskTestMiddle from './RiskTestMiddle';
import {RecommendationsComponents} from '../../../../../Recommendations/recommendations.constant';
import useFilledDiagnosis from "../../../../../../hooks/useFilledDiagnosis";

const RiskTestMiddleContainer = () => {
  const { goTo } = useNavigation();
  const { lastDate } = useFilledDiagnosis();

  return (
    <RiskTestMiddle
      currentState="result_analysis_variant_3"
      dateLastRiskTest={lastDate}
      isInfected={false}
      handleRecommendation={() => goTo(Routes.Recommendations, { component: RecommendationsComponents.RiskTestMiddle })}
    />
  );
};

export default RiskTestMiddleContainer;
