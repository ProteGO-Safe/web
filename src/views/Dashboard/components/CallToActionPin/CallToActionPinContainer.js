import React from 'react';
import { useSelector } from 'react-redux';
import CallToActionPin from './CallToActionPin';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';
import { getTimeOfConfirmedCovid } from '../../../../store/selectors/triage';

const CallToActionPinContainer = () => {
  const { goTo } = useNavigation();
  const timeOfConfirmedCovid = useSelector(getTimeOfConfirmedCovid);

  if (timeOfConfirmedCovid) {
    return null;
  }

  return <CallToActionPin onClick={() => goTo(Routes.UploadHistoricalData)} />;
};

export default CallToActionPinContainer;
