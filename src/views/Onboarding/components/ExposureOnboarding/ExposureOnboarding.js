import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showOnboarding } from '../../../../utils/servicesStatus';
import { NotSupported } from './components/NotSupported';
import { finishExposureOnboarding } from '../../../../store/actions/app';
import { Information } from './components/Information';
import { enableExposureNotificationService } from '../../../../store/actions/nativeData';
import { EXPOSURE_NOTIFICATION_STATUS } from '../../../../utils/servicesStatus/servicesStatus.constants';

const ExposureOnboarding = () => {
  const dispatch = useDispatch();
  const { servicesStatus } = useSelector(state => state.nativeData);

  useEffect(() => {
    const { exposureNotificationStatus } = servicesStatus;

    if (exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.ON) {
      dispatch(finishExposureOnboarding());
    }
  }, [servicesStatus, dispatch]);

  const handleFinishOnboarding = () => {
    dispatch(finishExposureOnboarding());
  };

  const nextInformation = () => {
    dispatch(enableExposureNotificationService());
  };

  if (!showOnboarding(servicesStatus)) {
    return <NotSupported onNext={handleFinishOnboarding} />;
  }

  return <Information onNext={nextInformation} />;
};

export default ExposureOnboarding;
