import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import ExposureMiddle from './ExposureMiddle';
import useNavigation from '../../../../../../hooks/useNavigation';
import { RecommendationsComponents } from '../../../../../Recommendations/recommendations.constant';

const ExposureMiddleContainer = () => {
  const { goTo } = useNavigation();

  return (
    <ExposureMiddle
      handleRecommendation={() => goTo(Routes.Recommendations, { component: RecommendationsComponents.ExposureMiddle })}
      isInfected={false}
    />
  );
};

export default ExposureMiddleContainer;
