import React from 'react';
import { Layout } from '../../components';
import { types, resolveData } from './SummaryRiskTest.helpers';
import SummaryRiskTest from './SummaryRiskTest';
import useTriage from '../../hooks/useTriage';
import useLabTest from '../../hooks/useLabTest';
import useNavigation from '../../hooks/useNavigation';
import useModalContext from '../../hooks/useModalContext';

const SummaryRiskTestContainer = () => {
  const { triageRiskLevel } = useTriage();
  const { isEnHigh } = useLabTest();
  const { goTo } = useNavigation();
  const { openModal } = useModalContext();

  const resolveType = () => {
    if (triageRiskLevel === 1 && !isEnHigh) {
      return types.TOR_GREEN_EN_NOT_RED;
    }
    if (triageRiskLevel === 2 && !isEnHigh) {
      return types.TOR_ORANGE_EN_NOT_RED;
    }
    if (triageRiskLevel === 3 && !isEnHigh) {
      return types.TOR_RED_EN_NOT_RED;
    }
    if (triageRiskLevel === 1 && isEnHigh) {
      return types.TOR_GREEN_EN_RED;
    }
    if (triageRiskLevel === 2 && isEnHigh) {
      return types.TOR_ORANGE_EN_RED;
    }
    if (triageRiskLevel === 3 && isEnHigh) {
      return types.TOR_RED_EN_RED;
    }
    return types.TOR_RED_EN_RED;
  };

  const data = resolveData(goTo, openModal, resolveType());

  return (
    <Layout hideBackButton noPadding fullHeight>
      <SummaryRiskTest data={data} />
    </Layout>
  );
};

export default SummaryRiskTestContainer;
