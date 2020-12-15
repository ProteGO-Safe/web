import React from 'react';
import CallToActionPin from './CallToActionPin';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';
import useHealthStats from '../../../../hooks/useHealthStats';

const CallToActionPinContainer = () => {
  const { goTo } = useNavigation();
  const { isCovidConfirmed } = useHealthStats();

  if (isCovidConfirmed) {
    return null;
  }

  return <CallToActionPin onClick={() => goTo(Routes.UploadHistoricalData)} />;
};

export default CallToActionPinContainer;
