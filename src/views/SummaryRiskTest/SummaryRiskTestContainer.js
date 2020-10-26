import React, { useMemo } from 'react';
import { Layout } from '../../components';
import { DATA } from './SummaryRiskTest.helpers';
import SummaryRiskTest from './SummaryRiskTest';
import useTriage from '../../hooks/useTriage';

const SummaryRiskTestContainer = () => {
  const { isExposure, riskLevel } = useTriage();

  const screenData = useMemo(() => {
    if (riskLevel === 1 && !isExposure) {
      return DATA.TOR_GREEN_EN_NOT_RED;
    }
    if (riskLevel === 2 && !isExposure) {
      return DATA.TOR_ORANGE_EN_NOT_RED;
    }
    if (riskLevel === 3 && !isExposure) {
      return DATA.TOR_RED_EN_NOT_RED;
    }
    if (riskLevel === 1 && isExposure) {
      return DATA.TOR_GREEN_EN_RED;
    }
    if (riskLevel === 2 && isExposure) {
      return DATA.TOR_ORANGE_EN_RED;
    }
    if (riskLevel === 3 && isExposure) {
      return DATA.TOR_RED_EN_RED;
    }
    return DATA.TOR_RED_EN_RED;
  }, [riskLevel, isExposure]);

  return (
    <Layout hideBackButton isNavigation noPadding fullHeight>
      <SummaryRiskTest data={screenData} />
    </Layout>
  );
};

export default SummaryRiskTestContainer;
