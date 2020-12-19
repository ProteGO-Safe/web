import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getNativeRiskLevel } from '../../store/selectors/nativeData';
import { getTimeOfConfirmedCovid, getTimeOfConfirmedManualCovid, getTriageLevel } from '../../store/selectors/triage';

const torLevels = {
  low: 'low',
  middle: 'middle',
  highNoCovid: 'highNoCovid',
  highCovid: 'highCovid'
};

const useHealthStats = () => {
  const nativeRiskLevel = useSelector(getNativeRiskLevel);
  const triageLevel = useSelector(getTriageLevel);
  const timeOfConfirmedManualCovid = useSelector(getTimeOfConfirmedManualCovid);
  const timeOfConfirmedCovid = useSelector(getTimeOfConfirmedCovid);

  const torLevel = useMemo(() => {
    switch (triageLevel) {
      case 'no_risk':
      case 'self_monitoring': {
        return torLevels.low;
      }
      case 'quarantine': {
        return torLevels.middle;
      }
      case 'isolation_call':
      case 'isolation_ambulance': {
        return torLevels.highCovid;
      }
      case 'call_doctor': {
        return torLevels.highNoCovid;
      }
      default:
        return undefined;
    }
  }, [triageLevel]);

  return {
    noEn: nativeRiskLevel === undefined || nativeRiskLevel === 0,
    isEnLow: nativeRiskLevel === 1,
    isEnMiddle: nativeRiskLevel === 2,
    isEnHigh: nativeRiskLevel === 3,
    noTor: torLevel === undefined,
    isTorLow: torLevel === torLevels.low,
    isTorMiddle: torLevel === torLevels.middle,
    isTorHighNoCovid: torLevel === torLevels.highNoCovid,
    isTorHigCovid: torLevel === torLevels.highCovid,
    isCovidConfirmed: !!timeOfConfirmedCovid,
    isCovidManual: !!timeOfConfirmedManualCovid
  };
};

export default useHealthStats;
