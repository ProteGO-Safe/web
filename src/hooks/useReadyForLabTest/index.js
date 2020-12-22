import { and, not, or } from 'ramda';
import useHealthStats from '../useHealthStats';

const useReadyForLabTest = () => {
  const { noTor, noEn, isTorLow, isEnLow } = useHealthStats();

  return and(not(or(noTor, isTorLow)), not(or(noEn, isEnLow)));
};

export default useReadyForLabTest;
