import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { ANDROID_STEPS } from './InstallApp.constants';
import InstallAppInstruction from './InstallAppInstruction';

const InstallAppInstructionAndroidContainer = () => {
  const {
    params: { browser }
  } = useRouteMatch();
  const steps = ANDROID_STEPS[browser] || ANDROID_STEPS.default;

  return <InstallAppInstruction steps={steps} />;
};

export default InstallAppInstructionAndroidContainer;
