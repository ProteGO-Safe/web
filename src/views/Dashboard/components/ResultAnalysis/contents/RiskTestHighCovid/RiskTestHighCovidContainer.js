import React from 'react';
import {Routes} from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import RiskTestHighCovid from './RiskTestHighCovid';
import {RecommendationsComponents} from '../../../../../Recommendations/recommendations.constant';
import useFilledDiagnosis from "../../../../../../hooks/useFilledDiagnosis";

const RiskTestHighCovidContainer = () => {
  const { goTo } = useNavigation();
  const { lastDate } = useFilledDiagnosis();

  return (
    <RiskTestHighCovid
      currentState="result_analysis_variant_4"
      dateLastRiskTest={lastDate}
      handleRecommendation={() =>
        goTo(Routes.Recommendations, { component: RecommendationsComponents.RiskTestHighCovid })
      }
    />
  );
};

export default RiskTestHighCovidContainer;
