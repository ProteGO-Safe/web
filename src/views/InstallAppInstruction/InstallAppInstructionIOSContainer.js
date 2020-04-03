import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { IOS_STEPS } from './InstallApp.constants';
import InstallAppInstruction from './InstallAppInstruction';

const InstallAppInstructionAndroidContainer = () => {
  const {
    params: { browser }
  } = useRouteMatch();
  const steps = IOS_STEPS[browser] || IOS_STEPS.default;

  return <InstallAppInstruction steps={steps} />;
};

export default InstallAppInstructionAndroidContainer;
