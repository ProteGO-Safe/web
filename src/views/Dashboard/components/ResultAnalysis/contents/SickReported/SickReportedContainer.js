import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import SickReported from './SickReported';

const SickReportedContainer = () => {
  const { goTo } = useNavigation();

  return (
    <SickReported
      currentState="result_analysis_variant_4"
      isInfected={false}
      handleRecommendation={() => goTo(Routes.Recommendations)}
    />
  );
};

export default SickReportedContainer;
