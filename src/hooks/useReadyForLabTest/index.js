import { and, or, not } from 'ramda';
import useHealthStats from '../useHealthStats';

const useReadyForLabTest = () => {
  const { noTor, noEn, isTorLow, isEnLow } = useHealthStats();

  const insufficientEn = or(noEn, isEnLow);
  const insufficientTor = or(noTor, isTorLow);

  return {
    insufficientEn,
    insufficientTor,
    isReadyForLabTest: and(not(insufficientEn), not(insufficientTor))
  };
};

export default useReadyForLabTest;
