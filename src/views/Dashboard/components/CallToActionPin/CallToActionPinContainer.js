import React, { useState, useEffect } from 'react';
import { not, ifElse } from 'ramda';
import CallToActionPin from './CallToActionPin';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';
import useHealthStats from '../../../../hooks/useHealthStats';
import useSupportExposureNotificationTracing from '../../../../hooks/useSupportExposureNotificationTracing';

const CallToActionPinContainer = () => {
  const { goTo } = useNavigation();
  const { isCovidConfirmed } = useHealthStats();
  const { areEnableAllServices, handleEnableServices } = useSupportExposureNotificationTracing();
  const [pressed, setPressed] = useState(false);

  const handlePressed = ifElse(
    () => areEnableAllServices,
    () => goTo(Routes.UploadHistoricalData),
    handleEnableServices
  );

  useEffect(() => {
    if (not(pressed)) {
      return;
    }
    handlePressed();
  }, [pressed, handlePressed]);

  if (isCovidConfirmed) {
    return null;
  }

  return <CallToActionPin onClick={() => setPressed(true)} />;
};

export default CallToActionPinContainer;
