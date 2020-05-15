import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EXPOSURE_NOTIFICATION_STATUS } from '../../utils/servicesStatus/servicesStatus.constants';
import ExposureOnboarding from './components/ExposureOnboarding/ExposureOnboarding';
import { isIOSWebView } from '../../utils/native';
import {
  finishExposureOnboarding,
  finishOnboarding
} from '../../store/actions/app';
import { NotificationOnboarding } from './components/NotificationOnboarding';
import { fetchServicesStatus } from '../../store/actions/nativeData';

const OnboardingContainer = () => {
  const dispatch = useDispatch();
  const { exposureOnboardingFinished = false } = useSelector(
    state => state.app
  );
  const {
    servicesStatus: {
      exposureNotificationStatus = EXPOSURE_NOTIFICATION_STATUS.NOT_SUPPORTED
    } = {},
    servicesStatusSetByNative = false
  } = useSelector(state => state.nativeData);

  useEffect(() => {
    dispatch(fetchServicesStatus());
  }, [dispatch]);

  useEffect(() => {
    if (exposureOnboardingFinished && !isIOSWebView()) {
      dispatch(finishOnboarding());
      return;
    }
    if (
      servicesStatusSetByNative &&
      exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.OFF
    ) {
      dispatch(finishExposureOnboarding());
      return;
    }

    if (exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.ON) {
      dispatch(finishExposureOnboarding());
    }
  }, [
    exposureOnboardingFinished,
    exposureNotificationStatus,
    servicesStatusSetByNative,
    dispatch
  ]);

  if (!exposureOnboardingFinished) {
    return <ExposureOnboarding />;
  }

  if (isIOSWebView()) {
    return <NotificationOnboarding />;
  }

  return null;
};

export default OnboardingContainer;
