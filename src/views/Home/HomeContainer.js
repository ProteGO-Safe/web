import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Home from './Home';
import {
  fetchExposureNotificationStatistics,
  fetchServicesStatus
} from '../../store/actions/nativeData';
import {
  resetTimeOfConfirmedCovid,
  revokeManualCovid
} from '../../store/actions/triage';
import { getSubscribedDistricts } from '../../store/selectors/restrictions';
import { getTimeOfConfirmedManualCovid } from '../../store/selectors/triage';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { timeOfConfirmedCovid } = useSelector(state => state.triage);
  const timeOfConfirmedManualCovid = useSelector(getTimeOfConfirmedManualCovid);
  const subscribedDistricts = useSelector(getSubscribedDistricts);

  useEffect(() => {
    dispatch(fetchServicesStatus());
    dispatch(fetchExposureNotificationStatistics());
    if (moment().diff(moment.unix(timeOfConfirmedCovid), 'days') >= 10) {
      dispatch(resetTimeOfConfirmedCovid());
    }
    if (moment().diff(moment.unix(timeOfConfirmedManualCovid), 'days') >= 10) {
      dispatch(revokeManualCovid());
    }
  }, [dispatch, timeOfConfirmedCovid, timeOfConfirmedManualCovid]);

  return <Home subscribedDistricts={subscribedDistricts} />;
};

export default HomeContainer;
