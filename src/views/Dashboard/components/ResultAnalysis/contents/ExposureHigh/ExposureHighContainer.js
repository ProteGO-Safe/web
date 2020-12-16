import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import ExposureHigh from './ExposureHigh';
import { RecommendationsComponents } from '../../../../../Recommendations/recommendations.constant';

const ExposureHighContainer = () => {
  const { goTo } = useNavigation();

  return (
    <ExposureHigh
      handleRecommendation={() => goTo(Routes.Recommendations, { component: RecommendationsComponents.ExposureHigh })}
      isInfected={false}
    />
  );
};

export default ExposureHighContainer;
