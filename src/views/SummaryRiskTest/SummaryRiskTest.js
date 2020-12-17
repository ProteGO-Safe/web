import React from 'react';
import { not, or } from 'ramda';
import { Layout } from '../../components';
import useHealthStats from '../../hooks/useHealthStats';
import { LabTestReady, SimpleResult } from './views';
import useLabTest from '../../hooks/useLabTest';
import * as Styled from './SummaryRiskTest.styled';

const SummaryRiskTest = () => {
  const { isEnHigh, isTorMiddle, isTorHigh, isEnMiddle } = useHealthStats();
  const { isSubscriptionInProgress } = useLabTest();

  const resolveView = () => {
    if (not(isSubscriptionInProgress) && or(isEnMiddle, isEnHigh) && or(isTorMiddle, isTorHigh)) {
      return <LabTestReady />;
    }
    return <SimpleResult />;
  };

  return (
    <Layout hideBackButton noPadding fullHeight hideBell>
      <Styled.SummaryRiskTest data-cy="view-summary-risk-test">{resolveView()}</Styled.SummaryRiskTest>
    </Layout>
  );
};

export default SummaryRiskTest;
