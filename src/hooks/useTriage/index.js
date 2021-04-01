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
    isTriageTorLow: and(isTorLow, noEn),
    isTriageTorMiddle: and(isTorMiddle, noEn),
    isTriageTorHighNoCovid: and(isTorHighNoCovid, noEn),
    isTriageTorHighCovid: and(isTorHigCovid, noEn),
    isTriageEnLow: and(noTor, isEnLow) || and(isTorLow, isEnLow),
    isTriageEnMiddle: and(isTorLow, isEnMiddle) || and(isTorMiddle, isEnMiddle) || and(noTor, isEnMiddle),
    isTriageEnHigh:
      and(isTorHighNoCovid, isEnMiddle) ||
      and(isTorHigCovid, isEnMiddle) ||
      and(isTorLow, isEnHigh) ||
      and(isTorMiddle, isEnHigh) ||
      and(isTorHighNoCovid, isEnHigh) ||
      and(isTorHigCovid, isEnHigh) ||
      and(noTor, isEnHigh),
    isTriageTorMiddleEnLow: and(isTorMiddle, isEnLow),
    isTriageTorHighNoCovidEnLow: and(isTorHighNoCovid, isEnLow),
    isTriageTorHighCovidEnLow: and(isTorHigCovid, isEnLow)
  };
};

export default useTriage;
