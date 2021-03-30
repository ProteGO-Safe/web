import React from 'react';
import { not, or } from 'ramda';
import { Layout } from '../../components';
import useHealthStats from '../../hooks/useHealthStats';
import { LabTestReady, SimpleResult } from './views';
import useLabTest from '../../hooks/useLabTest';
import * as Styled from './SummaryRiskTest.styled';
import useTorHigh from './hooks/useTorHigh';

const SummaryRiskTest = () => {
  const { isEnHigh, isTorMiddle, isEnMiddle } = useHealthStats();
  const { isSubscriptionInProgress } = useLabTest();
  const isTorHigh = useTorHigh();

  const resolveView = () => {
    if (not(isSubscriptionInProgress) && (isEnMiddle || isEnHigh) && or(isTorMiddle, isTorHigh)) {
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
