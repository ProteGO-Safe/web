import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import moment from 'moment';
import {
  fetchExposureNotificationStatistics,
  fetchServicesStatus,
  revokeEnStatus
} from '../../store/actions/nativeData';
import { getTimeOfConfirmedCovid, getTimeOfConfirmedManualCovid } from '../../store/selectors/triage';
import { resetTimeOfConfirmedCovid, revokeManualCovid, setLowTriageLevel } from '../../store/actions/triage';
import { getTimeAndTriageLevelOfLastRiskTest } from '../../store/selectors/riskTest';

const useCovidStateCleaner = () => {
  const dispatch = useDispatch();
  const timeOfConfirmedCovid = useSelector(getTimeOfConfirmedCovid);
  const timeOfConfirmedManualCovid = useSelector(getTimeOfConfirmedManualCovid);
  const { timestamp: timeOfLastRiskTest, triageLevel: riskLevelOfLastRiskTest } = useSelector(
    getTimeAndTriageLevelOfLastRiskTest
  );

  useEffect(() => {
    dispatch(fetchServicesStatus());
    dispatch(fetchExposureNotificationStatistics());
    if (moment().diff(moment.unix(timeOfConfirmedCovid), 'days') >= 10) {
      dispatch(revokeEnStatus()).then(() => {
        dispatch(resetTimeOfConfirmedCovid());
      });
    }
    if (moment().diff(moment.unix(timeOfConfirmedManualCovid), 'days') >= 10) {
      dispatch(revokeEnStatus()).then(() => {
        dispatch(revokeManualCovid());
      });
    }
    if (moment().diff(moment.unix(timeOfLastRiskTest), 'days') >= 10) {
      if (['call_doctor', 'isolation_ambulance', 'isolation_call', 'quarantine'].includes(riskLevelOfLastRiskTest)) {
        dispatch(setLowTriageLevel());
      }
    }
  }, [dispatch, timeOfConfirmedCovid, timeOfConfirmedManualCovid, timeOfLastRiskTest, riskLevelOfLastRiskTest]);
};

export default useCovidStateCleaner;
