import React from 'react';
import { and, or } from 'ramda';
import useTriage from '../../../../../../hooks/useTriage';
import SignedForLabTest from './SignedForLabTest';
import useLabTest from '../../../../../../hooks/useLabTest';
import { isIOSWebView } from '../../../../../../utils/native';
import useNavigation from '../../../../../../hooks/useNavigation';
import { Routes } from '../../../../../../services/navigationService/routes';

const SignedForLabTestContainer = () => {
  const { goTo } = useNavigation();
  const { isSubscriptionConfirmed } = useLabTest();
  const { isTriageEnMiddle, isTriageEnHigh } = useTriage();

  const handleLabTestResult = () => goTo(Routes.LabTestResult);

  const installPath = (() => {
    if (isIOSWebView()) {
      return 'https://apps.apple.com/pl/app/kwarantanna-domowa/id1502997499?l=pl';
    }

    return 'https://play.google.com/store/apps/details?id=pl.nask.droid.kwarantannadomowa';
  })();

  if (and(or(isTriageEnMiddle, isTriageEnHigh), isSubscriptionConfirmed)) {
    return <SignedForLabTest installPath={installPath} handleLabTestResult={handleLabTestResult} />;
  }

  return null;
};

export default SignedForLabTestContainer;
