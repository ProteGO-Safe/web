import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { finishOnboarding } from '../../../../store/actions/app';
import { Information } from './components/Information';
import { enableNotification } from '../../../../store/actions/nativeData';

const NotificationOnboarding = () => {
  const dispatch = useDispatch();
  const { servicesStatus } = useSelector(state => state.nativeData);

  useEffect(() => {
    const { isNotificationEnabled } = servicesStatus;

    if (isNotificationEnabled) {
      dispatch(finishOnboarding());
    }
  }, [servicesStatus, dispatch]);

  const nextInformation = () => {
    dispatch(enableNotification());
  };

  return <Information onNext={nextInformation} />;
};

export default NotificationOnboarding;
