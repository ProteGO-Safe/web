import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import SickReported from './SickReported';
import { RecommendationsComponents } from '../../../../../Recommendations/recommendations.constant';

const SickReportedContainer = () => {
  const { goTo } = useNavigation();

  return (
    <SickReported
      currentState="result_analysis_variant_4"
      handleRecommendation={() => goTo(Routes.Recommendations, { component: RecommendationsComponents.SickReported })}
    />
  );
};

export default SickReportedContainer;
