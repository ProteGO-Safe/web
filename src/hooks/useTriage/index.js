import { and } from 'ramda';
import useHealthStats from '../useHealthStats';

const useTriage = () => {
  const {
    noTor,
    noEn,
    isTorLow,
    isTorMiddle,
    isTorHighNoCovid,
    isTorHigCovid,
    isEnLow,
    isEnMiddle,
    isEnHigh
  } = useHealthStats();

  return {
    isTriageTorLow: and(isTorLow, noEn) || and(isTorLow, isEnLow),
    isTriageTorMiddle: and(isTorMiddle, noEn) || and(isTorMiddle, isEnLow),
    isTriageTorHighNoCovid: and(isTorHighNoCovid, noEn) || and(isTorHighNoCovid, isEnLow),
    isTriageTorHighCovid: and(isTorHigCovid, noEn) || and(isTorHigCovid, isEnLow),
    isTriageEnLow: and(noTor, isEnLow),
    isTriageEnMiddle: and(isTorLow, isEnMiddle) || and(isTorMiddle, isEnMiddle) || and(noTor, isEnMiddle),
    isTriageEnHigh:
      and(isTorHighNoCovid, isEnMiddle) ||
      and(isTorHigCovid, isEnMiddle) ||
      and(isTorLow, isEnHigh) ||
      and(isTorMiddle, isEnHigh) ||
      and(isTorHighNoCovid, isEnHigh) ||
      and(isTorHigCovid, isEnHigh) ||
      and(noTor, isEnHigh)
  };
};

export default useTriage;
