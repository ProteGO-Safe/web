import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import moment from 'moment';
import {
  fetchExposureNotificationStatistics,
  fetchServicesStatus,
  revokeEnStatus
} from '../../store/actions/nativeData';
import {
  getTimeOfConfirmedCovid,
  getTimeOfConfirmedManualCovid
} from '../../store/selectors/triage';
import {
  resetTimeOfConfirmedCovid,
  revokeManualCovid
} from '../../store/actions/triage';

const useCovidStateCleaner = () => {
  const dispatch = useDispatch();
  const timeOfConfirmedCovid = useSelector(getTimeOfConfirmedCovid);
  const timeOfConfirmedManualCovid = useSelector(getTimeOfConfirmedManualCovid);

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
  }, [dispatch, timeOfConfirmedCovid, timeOfConfirmedManualCovid]);
};

export default useCovidStateCleaner;
