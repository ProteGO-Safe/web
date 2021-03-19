import React, { useEffect, useState } from 'react';
import { and } from 'ramda';
import { Stumbler } from './components';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';
import useReadyForLabTest from '../../hooks/useReadyForLabTest';

const LabTestOnBoarding = () => {
  const { goTo, gotToWithHomeAsBack, getParam } = useNavigation();
  const { insufficientEn, insufficientTor, isReadyForLabTest } = useReadyForLabTest();

  const forceTemporaryEn = getParam('forceTemporaryEn');

  const [showStumbler, setShowStumbler] = useState(false);
  const [temporaryEn, setTemporaryEn] = useState(forceTemporaryEn);

  useEffect(() => {
    if (isReadyForLabTest) {
      goTo(Routes.LabTest);
      return;
    }
    if (and(temporaryEn, insufficientTor)) {
      goTo(Routes.Diagnosis, { forceTemporaryEn: true });
      return;
    }
    if (temporaryEn) {
      goTo(Routes.SummaryRiskTest, { forceTemporaryEn: true });
      return;
    }
    if (insufficientEn) {
      setShowStumbler(true);
      return;
    }
    if (insufficientTor) {
      gotToWithHomeAsBack(Routes.Diagnosis);
    }
    // eslint-disable-next-line
  }, [insufficientEn, insufficientTor, isReadyForLabTest, temporaryEn]);

  if (showStumbler) {
    return <Stumbler skipStumbler={() => setTemporaryEn(true)} />;
  }

  return null;
};

export default LabTestOnBoarding;
