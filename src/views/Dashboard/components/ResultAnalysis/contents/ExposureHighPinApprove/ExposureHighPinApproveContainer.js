import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import ExposureHighPinApprove from './ExposureHighPinApprove';
import { RecommendationsComponents } from '../../../../../Recommendations/recommendations.constant';

const ExposureHighPinApproveContainer = () => {
  const { goTo } = useNavigation();

  return (
    <ExposureHighPinApprove
      handleLabTestResult={() => goTo(Routes.LabTestResult)}
      handleRecommendation={() =>
        goTo(Routes.Recommendations, { component: RecommendationsComponents.ExposureHighPinApprove })
      }
      isInfected
    />
  );
};

export default ExposureHighPinApproveContainer;
