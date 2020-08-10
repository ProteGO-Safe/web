import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Home from './Home';
import {
  fetchExposureNotificationStatistics,
  fetchServicesStatus
} from '../../store/actions/nativeData';
import { resetTimeOfConfirmedCovid } from '../../store/actions/triage';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { timeOfConfirmedCovid } = useSelector(state => state.triage);

  useEffect(() => {
    dispatch(fetchServicesStatus());
    dispatch(fetchExposureNotificationStatistics());
    if (moment().diff(moment.unix(timeOfConfirmedCovid), 'days') >= 14) {
      dispatch(resetTimeOfConfirmedCovid());
    }
  }, [dispatch, timeOfConfirmedCovid]);

  return <Home />;
};

export default HomeContainer;
