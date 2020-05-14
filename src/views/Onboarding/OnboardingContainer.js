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

const OnboardingContainer = () => {
  const dispatch = useDispatch();
  const { exposureOnboardingFinished = false } = useSelector(
    state => state.app
  );
  const {
    servicesStatus: {
      exposureNotificationStatus = EXPOSURE_NOTIFICATION_STATUS.NOT_SUPPORTED
    } = {}
  } = useSelector(state => state.nativeData);

  useEffect(() => {
    if (exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.ON) {
      dispatch(finishExposureOnboarding());
    }
    if (exposureOnboardingFinished && !isIOSWebView()) {
      dispatch(finishOnboarding());
    }
  }, [exposureOnboardingFinished, exposureNotificationStatus, dispatch]);

  if (!exposureOnboardingFinished) {
    return <ExposureOnboarding />;
  }

  if (isIOSWebView()) {
    return <NotificationOnboarding />;
  }

  return null;
};

export default OnboardingContainer;
