import React from 'react';
import { not, or } from 'ramda';
import { Layout } from '../../components';
import useHealthStats from '../../hooks/useHealthStats';
import { LabTestReady, SimpleResult } from './views';
import useLabTest from '../../hooks/useLabTest';
import * as Styled from './SummaryRiskTest.styled';
import useTorHigh from './hooks/useTorHigh';
import useNavigation from '../../hooks/useNavigation';

const SummaryRiskTest = () => {
  const { getParam } = useNavigation();
  const { isEnHigh, isTorMiddle, isEnMiddle } = useHealthStats();
  const { isSubscriptionInProgress } = useLabTest();
  const isTorHigh = useTorHigh();

  const forceTemporaryEn = getParam('forceTemporaryEn');

  const resolveView = () => {
    if (not(isSubscriptionInProgress) && (isEnMiddle || isEnHigh || forceTemporaryEn) && or(isTorMiddle, isTorHigh)) {
      return <LabTestReady />;
    }
    return <SimpleResult />;
  };

  return (
    <Layout hideBackButton fullHeight hideBell>
      <Styled.SummaryRiskTest data-cy="view-summary-risk-test">{resolveView()}</Styled.SummaryRiskTest>
    </Layout>
  );
};

export default SummaryRiskTest;
