import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import SickApprove from './SickApprove';
import { RecommendationsComponents } from '../../../../../Recommendations/recommendations.constant';

const SickApproveContainer = () => {
  const { goTo } = useNavigation();

  return (
    <SickApprove
      isInfected={false}
      handleRecommendation={() => goTo(Routes.Recommendations, { component: RecommendationsComponents.SickApprove })}
    />
  );
};

export default SickApproveContainer;
