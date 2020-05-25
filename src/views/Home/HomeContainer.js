import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Home from './Home';
import { Diagnosis } from '../Diagnosis';
import useFilledDays from '../../hooks/useFilledDays';
import {
  fetchExposureNotificationStatistics,
  fetchServicesStatus
} from '../../store/actions/nativeData';

const HomeContainer = () => {
  const dispatch = useDispatch();

  const filledDays = useFilledDays();

  useEffect(() => {
    dispatch(fetchServicesStatus());
    dispatch(fetchExposureNotificationStatistics());
  }, [dispatch]);

  if (filledDays.length === 0) {
    return <Diagnosis />;
  }

  return <Home />;
};

export default HomeContainer;
