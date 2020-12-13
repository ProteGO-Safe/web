import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import SickApprove from './SickApprove';

const SickApproveContainer = () => {
  const { goTo } = useNavigation();

  return (
    <SickApprove
      dateLastRiskTest="13.10.2020, 12:23"
      dateRiskMonitoring="05.12.2020, 13:44"
      isInfected={false}
      handleRecommendation={() => goTo(Routes.Recommendations)}
    />
  );
};

export default SickApproveContainer;
