import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Home from './Home';
import {
  fetchExposureNotificationStatistics,
  fetchServicesStatus
} from '../../store/actions/nativeData';
import { resetTimeOfConfirmedCovid } from '../../store/actions/triage';
import { getSubscribedDistricts } from '../../store/selectors/restrictions';
import { unsubscribeDistrict } from '../../store/actions/restrictions';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { timeOfConfirmedCovid } = useSelector(state => state.triage);
  const subscribedDistricts = useSelector(getSubscribedDistricts);

  const handleUnsubscribeDistrict = useCallback(districtId => {
    dispatch(unsubscribeDistrict(districtId));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(fetchServicesStatus());
    dispatch(fetchExposureNotificationStatistics());
    if (moment().diff(moment.unix(timeOfConfirmedCovid), 'days') >= 14) {
      dispatch(resetTimeOfConfirmedCovid());
    }
  }, [dispatch, timeOfConfirmedCovid]);

  return (
    <Home
      subscribedDistricts={subscribedDistricts}
      handleUnsubscribeDistrict={handleUnsubscribeDistrict}
    />
  );
};

export default HomeContainer;
