import React from 'react';
import ExposureHighPinApprove from './ExposureHighPinApprove';

const ExposureHighPinApproveContainer = () => {
  const handleClick = e => {
    e.preventDefault();
    window.location.href = 'https://pacjent.gov.pl/teleporada';
  };

  return <ExposureHighPinApprove phoneNumber="222500115" handleHelpline={handleClick} />;
};

export default ExposureHighPinApproveContainer;
