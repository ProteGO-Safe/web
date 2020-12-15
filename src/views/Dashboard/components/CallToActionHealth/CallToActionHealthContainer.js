import React from 'react';
import { and } from 'ramda';
import CallToActionHealth from './CallToActionHealth';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';
import useHealthStats from '../../../../hooks/useHealthStats';

const CallToActionHealthContainer = () => {
  const { goTo } = useNavigation();
  const { noEn, noTor } = useHealthStats();

  if (and(noEn, noTor)) {
    return null;
  }

  return <CallToActionHealth onClick={() => goTo(Routes.Diagnosis)} />;
};

export default CallToActionHealthContainer;
