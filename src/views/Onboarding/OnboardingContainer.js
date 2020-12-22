import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ExposureOnboarding } from './components/ExposureOnboarding';
import { isIOSWebView } from '../../utils/native';
import { finishOnboarding } from '../../store/actions/app';
import { NotificationOnboarding } from './components/NotificationOnboarding';
import { fetchServicesStatus } from '../../store/actions/nativeData';
import { Layout } from '../../components';

const OnboardingContainer = () => {
  const dispatch = useDispatch();
  const { exposureOnboardingFinished = false } = useSelector(state => state.app);
  const { servicesStatusSetByNative } = useSelector(state => state.nativeData);

  useEffect(() => {
    dispatch(fetchServicesStatus());
  }, [dispatch]);

  useEffect(() => {
    if (exposureOnboardingFinished && !isIOSWebView()) {
      dispatch(finishOnboarding());
    }
  }, [exposureOnboardingFinished, servicesStatusSetByNative, dispatch]);

  const resolveView = () => {
    if (!exposureOnboardingFinished) {
      return <ExposureOnboarding />;
    }

    if (isIOSWebView()) {
      return <NotificationOnboarding />;
    }
    return null;
  };

  return (
    <Layout hideBackButton isGovFooter hideBell>
      {resolveView()}
    </Layout>
  );
};

export default OnboardingContainer;
