import React, { useMemo } from 'react';
import { Layout } from '../../components';
import { DATA } from './SummaryRiskTest.helpers';
import SummaryRiskTest from './SummaryRiskTest';
import useTriage from '../../hooks/useTriage';
import useLabTest from '../../hooks/useLabTest';

const SummaryRiskTestContainer = () => {
  const { triageRiskLevel } = useTriage();
  const { isEnHigh } = useLabTest();

  const screenData = useMemo(() => {
    if (triageRiskLevel === 1 && !isEnHigh) {
      return DATA.TOR_GREEN_EN_NOT_RED;
    }
    if (triageRiskLevel === 2 && !isEnHigh) {
      return DATA.TOR_ORANGE_EN_NOT_RED;
    }
    if (triageRiskLevel === 3 && !isEnHigh) {
      return DATA.TOR_RED_EN_NOT_RED;
    }
    if (triageRiskLevel === 1 && isEnHigh) {
      return DATA.TOR_GREEN_EN_RED;
    }
    if (triageRiskLevel === 2 && isEnHigh) {
      return DATA.TOR_ORANGE_EN_RED;
    }
    if (triageRiskLevel === 3 && isEnHigh) {
      return DATA.TOR_RED_EN_RED;
    }
    return DATA.TOR_RED_EN_RED;
  }, [triageRiskLevel, isEnHigh]);

  return (
    <Layout hideBackButton noPadding fullHeight>
      <SummaryRiskTest data={screenData} />
    </Layout>
  );
};

export default SummaryRiskTestContainer;
