import React from 'react';
import useHealthStats from '../../../../hooks/useHealthStats';
import { T } from '../../../../components';
import useTorHigh from '../useTorHigh';

const useRiskLevel = () => {
  const { isTorLow, isTorMiddle } = useHealthStats();
  const isTorHigh = useTorHigh();

  if (isTorLow) {
    return <T i18nKey="risk_test_result_low" />;
  }
  if (isTorMiddle) {
    return <T i18nKey="risk_test_result_middle" />;
  }
  if (isTorHigh) {
    return <T i18nKey="risk_test_result_high" />;
  }

  return <T i18nKey="risk_test_result_high" />;
};

export default useRiskLevel;
