import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { finishOnboarding } from '../../../../store/actions/app';
import { Information } from './components/Information';
import { enableNotification } from '../../../../store/actions/nativeData';

const NotificationOnboarding = () => {
  const dispatch = useDispatch();
  const { servicesStatus, servicesStatusSetByNative } = useSelector(
    state => state.nativeData
  );

  useEffect(() => {
    const { isNotificationEnabled } = servicesStatus;

    if (isNotificationEnabled || servicesStatusSetByNative) {
      dispatch(finishOnboarding());
    }
  }, [servicesStatus, servicesStatusSetByNative, dispatch]);

  const nextInformation = () => {
    enableNotification();
  };

  const onSkip = () => {
    dispatch(finishOnboarding());
  };

  return <Information onNext={nextInformation} onSkip={onSkip} />;
};

export default NotificationOnboarding;
