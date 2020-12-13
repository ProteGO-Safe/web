import React from 'react';
import SickReported from './SickReported';

const SickReportedContainer = () => {
  return (
    <SickReported
      currentState="result_analysis_variant_4"
      dateLastRiskTest="13.10.2020, 12:23"
      dateRiskMonitoring="05.12.2020, 13:44"
      isInfected={false}
      onClick={() => null}
    />
  );
};

export default SickReportedContainer;
