import React, { useEffect, useState } from 'react';
import { and, ifElse, not } from 'ramda';
import CallToActionPin from './CallToActionPin';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';
import useHealthStats from '../../../../hooks/useHealthStats';
import useSupportExposureNotificationTracing from '../../../../hooks/useSupportExposureNotificationTracing';

const CallToActionPinContainer = () => {
  const { goTo } = useNavigation();
  const { isCovidConfirmed } = useHealthStats();
  const {
    areEnableAllServices,
    handleEnableServices,
    receivedServicesMarker
  } = useSupportExposureNotificationTracing();
  const [pressed, setPressed] = useState(false);

  const handlePressed = ifElse(
    () => areEnableAllServices,
    () => goTo(Routes.UploadHistoricalData),
    handleEnableServices
  );

  const handleChangeServices = ifElse(
    () => and(areEnableAllServices, pressed),
    () => goTo(Routes.UploadHistoricalData),
    () => setPressed(false)
  );

  useEffect(() => {
    if (not(pressed)) {
      return;
    }
    handlePressed();
    // eslint-disable-next-line
  }, [pressed]);

  useEffect(() => {
    handleChangeServices();
    // eslint-disable-next-line
  }, [receivedServicesMarker]);

  if (isCovidConfirmed) {
    return null;
  }

  return <CallToActionPin onClick={() => setPressed(true)} />;
};

export default CallToActionPinContainer;
