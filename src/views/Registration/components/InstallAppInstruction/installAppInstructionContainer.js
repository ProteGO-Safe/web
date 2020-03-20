import React from 'react';
import { useFormikContext } from 'formik';
import getMobileOperatingSystem from '../../../../services/getMobileOperationSystem';
import { ANDROID, IOS } from '../../../../constants';
import InstallAppInstructionAndroid from './InstallAppInstructionAndroid';
import InstallAppIos from './InstallAppInstructionIos';

const InstallAppInstructionContainer = () => {
  const system = getMobileOperatingSystem();
  const { setFieldValue } = useFormikContext();

  const handleLeave = () => {
    setFieldValue('installApp', false);
    setFieldValue('step', 2);
  };

  if (system === ANDROID) {
    return <InstallAppInstructionAndroid onLeave={handleLeave} />;
  }

  if (system === IOS) {
    return <InstallAppIos onLeave={handleLeave} />;
  }

  return null;
};

export default InstallAppInstructionContainer;
