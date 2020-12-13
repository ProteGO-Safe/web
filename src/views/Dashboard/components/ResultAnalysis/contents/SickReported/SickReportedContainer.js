import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import SickReported from './SickReported';

const SickReportedContainer = () => {
  const { goTo } = useNavigation();

  return (
    <SickReported
      currentState="result_analysis_variant_4"
      dateLastRiskTest="13.10.2020, 12:23"
      dateRiskMonitoring="05.12.2020, 13:44"
      isInfected={false}
      onClick={() => goTo(Routes.Recommendations)}
    />
  );
};

export default SickReportedContainer;
