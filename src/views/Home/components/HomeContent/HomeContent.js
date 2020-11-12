import React from 'react';
import { withTranslation } from 'react-i18next';
import useTriage from '../../../../hooks/useTriage';
import {
  ExposureSick,
  NoData,
  TestGreen,
  ExposureHigh,
  ExposureLow,
  ExposureMid,
  TestRed,
  TestYellow
} from './views';

const HomeContent = () => {
  const {
    exposureRiskLevel,
    isCovid,
    isManualCovid,
    triageRiskLevel
  } = useTriage();

  if (isCovid || isManualCovid) {
    return <ExposureSick />;
  }
  if (triageRiskLevel === 0 && exposureRiskLevel === 0) {
    return <NoData />;
  }
  if (
    triageRiskLevel === 1 &&
    (exposureRiskLevel === 0 || exposureRiskLevel === 1)
  ) {
    return <TestGreen />;
  }
  if (
    triageRiskLevel === 2 &&
    (exposureRiskLevel === 0 || exposureRiskLevel === 1)
  ) {
    return <TestYellow />;
  }
  if (triageRiskLevel === 3 && [0, 1].includes(exposureRiskLevel)) {
    return <TestRed />;
  }
  if (triageRiskLevel === 0 && exposureRiskLevel === 1) {
    return <ExposureLow />;
  }
  if (exposureRiskLevel === 2 && [0, 1, 2].includes(triageRiskLevel)) {
    return <ExposureMid />;
  }
  if (
    exposureRiskLevel === 3 ||
    (exposureRiskLevel === 2 && triageRiskLevel === 3)
  ) {
    return <ExposureHigh />;
  }

  return null;
};

export default withTranslation()(HomeContent);
