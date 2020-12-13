import React from 'react';
import ExposureHigh from './ExposureHigh';

const ExposureHighContainer = () => {
  const handleClick = e => {
    e.preventDefault();
    window.location.href = 'https://pacjent.gov.pl/teleporada';
  };

  return <ExposureHigh phoneNumber="222500115" handleHelpline={handleClick} />;
};

export default ExposureHighContainer;
