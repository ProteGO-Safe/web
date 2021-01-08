import { or } from 'ramda';
import useHealthStats from '../../../../hooks/useHealthStats';

const useTorHigh = () => {
  const { isTorHighNoCovid, isTorHigCovid } = useHealthStats();

  return or(isTorHighNoCovid, isTorHigCovid);
};

export default useTorHigh;
