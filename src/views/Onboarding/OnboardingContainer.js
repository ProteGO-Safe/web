import React, { useState } from 'react';

import { Information } from './components/Information';
import { isAndroidWebView, isIOSWebView } from '../../utills/native';
import OnboardingAndroid from './OnboardingAndroid';
import OnboardingIOS from './OnboardingIOS';

const OnboardingContainer = () => {
  const [isInformationShowed, setIsInformationShowed] = useState(false);

  const nextInformation = () => {
    setIsInformationShowed(true);
  };

  if (!isInformationShowed) {
    return <Information onNext={nextInformation} />;
  }

  if (isAndroidWebView()) {
    return <OnboardingAndroid />;
  }

  if (isIOSWebView()) {
    return <OnboardingIOS />;
  }

  return null;
};

export default OnboardingContainer;
