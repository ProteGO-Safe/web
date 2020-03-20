import React from 'react';
import { useFormikContext } from 'formik';
import getMobileOperatingSystem from '../../../../services/getMobileOperationSystem';
import { ANDROID, IOS } from '../../../../constants';
import InstallAppAndroid from './InstallAppAndroid';
import InstallAppIos from './InstallAppIos';
import './InstallApp.scss';

const InstallAppContainer = () => {
  const system = getMobileOperatingSystem();
  const { setFieldValue } = useFormikContext();

  const handleLeave = () => {
    setFieldValue('installApp', false);
    setFieldValue('step', 2);
  };

  if (system === ANDROID) {
    return <InstallAppAndroid onLeave={handleLeave} />;
  }

  if (system === IOS) {
    return <InstallAppIos onLeave={handleLeave} />;
  }

  return null;
};

export default InstallAppContainer;
