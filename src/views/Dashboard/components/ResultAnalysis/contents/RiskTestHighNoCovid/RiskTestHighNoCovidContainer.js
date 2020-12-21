import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import RiskTestHighNoCovid from './RiskTestHighNoCovid';
import { RecommendationsComponents } from '../../../../../Recommendations/recommendations.constant';
import useFilledDiagnosis from '../../../../../../hooks/useFilledDiagnosis';

const RiskTestHighNoCovidContainer = () => {
  const { goTo } = useNavigation();
  const { lastDate } = useFilledDiagnosis();

  return (
    <RiskTestHighNoCovid
      currentState="result_analysis_variant_4"
      dateLastRiskTest={lastDate}
      isInfected={false}
      handleRecommendation={() =>
        goTo(Routes.Recommendations, { component: RecommendationsComponents.RiskTestHighNoCovid })
      }
    />
  );
};

export default RiskTestHighNoCovidContainer;
