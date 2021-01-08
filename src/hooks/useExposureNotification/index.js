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

  const { isEnHigh } = useHealthStats();

  const [occurredHighEn, setOccurredHighEn] = useState(false);

  useSkippingFirstUpdate(() => {
    if (and(isEnHigh, notEquals(riskLevel, previousRiskLevel))) {
      setOccurredHighEn(true);
    }
  }, [isEnHigh, riskLevel, previousRiskLevel]);

  return { occurredHighEn };
};

export default useExposureNotification;
