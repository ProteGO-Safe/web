import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import ExposureMiddle from './ExposureMiddle';
import useNavigation from '../../../../../../hooks/useNavigation';
import { RecommendationsComponents } from '../../../../../Recommendations/recommendations.constant';

const ExposureMiddleContainer = () => {
  const { goTo } = useNavigation();

  return (
    <ExposureMiddle
      handlePickUpTest={() => goTo(Routes.LabTest)}
      handleRecommendation={() => goTo(Routes.Recommendations, { component: RecommendationsComponents.ExposureMiddle })}
      isInfected={false}
    />
  );
};

export default ExposureMiddleContainer;
