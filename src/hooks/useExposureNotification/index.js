import { useSelector } from 'react-redux';
import { and } from 'ramda';
import { useState } from 'react';
import { getNativeRiskLevel } from '../../store/selectors/nativeData';
import { usePrevious } from '../usePrevious';
import useSkippingFirstUpdate from '../useSkippingFirstUpdate';
import { notEquals } from '../../helpers/logic';
import useHealthStats from '../useHealthStats';

const useExposureNotification = () => {
  const riskLevel = useSelector(getNativeRiskLevel);
  const previousRiskLevel = usePrevious(riskLevel);

  const { isEnHigh, isEnMiddle } = useHealthStats();

  const [occurredHighEn, setOccurredHighEn] = useState(false);
  const [occurredMiddleEn, setOccurredMiddleEn] = useState(false);

  useSkippingFirstUpdate(() => {
    if (and(isEnHigh, notEquals(riskLevel, previousRiskLevel))) {
      setOccurredHighEn(true);
    }
    if (and(isEnMiddle, notEquals(riskLevel, previousRiskLevel))) {
      setOccurredMiddleEn(true);
    }
  }, [isEnHigh, riskLevel, previousRiskLevel]);

  return { occurredHighEn, occurredMiddleEn };
};

export default useExposureNotification;
