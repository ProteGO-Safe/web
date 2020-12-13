import React from 'react';
import SickApprove from './SickApprove';

const SickApproveContainer = () => {
  return (
    <SickApprove
      dateLastRiskTest="13.10.2020, 12:23"
      dateRiskMonitoring="05.12.2020, 13:44"
      isInfected={false}
      onClick={() => null}
    />
  );
};

export default SickApproveContainer;
