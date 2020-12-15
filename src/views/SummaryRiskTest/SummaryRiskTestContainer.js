import React from 'react';
import { Layout } from '../../components';
import { resolveData, types } from './SummaryRiskTest.helpers';
import SummaryRiskTest from './SummaryRiskTest';
import useNavigation from '../../hooks/useNavigation';
import useModalContext from '../../hooks/useModalContext';
import useHealthStats from '../../hooks/useHealthStats';

const SummaryRiskTestContainer = () => {
  const { isEnHigh, isTorLow, isTorMiddle, isTorHigh, isTorHighWithCovid } = useHealthStats();
  const { goTo } = useNavigation();
  const { openModal } = useModalContext();

  const resolveType = () => {
    if (isTorLow && !isEnHigh) {
      return types.TOR_GREEN_EN_NOT_RED;
    }
    if (isTorMiddle && !isEnHigh) {
      return types.TOR_ORANGE_EN_NOT_RED;
    }
    if ((isTorHigh || isTorHighWithCovid) && !isEnHigh) {
      return types.TOR_RED_EN_NOT_RED;
    }
    if (isTorLow && isEnHigh) {
      return types.TOR_GREEN_EN_RED;
    }
    if (isTorMiddle && isEnHigh) {
      return types.TOR_ORANGE_EN_RED;
    }
    if ((isTorHigh || isTorHighWithCovid) && isEnHigh) {
      return types.TOR_RED_EN_RED;
    }
    return types.TOR_RED_EN_RED;
  };

  const data = resolveData(goTo, openModal, resolveType());

  return (
    <Layout hideBackButton noPadding fullHeight hideBell>
      <SummaryRiskTest data={data} />
    </Layout>
  );
};

export default SummaryRiskTestContainer;
