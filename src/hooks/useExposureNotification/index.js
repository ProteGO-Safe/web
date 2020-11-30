import { useSelector } from 'react-redux';
import { and, equals } from 'ramda';
import { useState } from 'react';
import { getNativeRiskLevel } from '../../store/selectors/nativeData';
import { usePrevious } from '../usePrevious';
import useSkippingFirstUpdate from '../useSkippingFirstUpdate';
import { notEquals } from '../../helpers/logic';

const useExposureNotification = () => {
  const riskLevel = useSelector(getNativeRiskLevel);
  const previousRiskLevel = usePrevious(riskLevel);

  const [occurredHighEn, setOccurredHighEn] = useState(false);

  useSkippingFirstUpdate(() => {
    if (and(equals(riskLevel, 3), notEquals(riskLevel, previousRiskLevel))) {
      setOccurredHighEn(true);
    }
  }, [riskLevel, previousRiskLevel]);

  return { occurredHighEn };
};

export default useExposureNotification;
