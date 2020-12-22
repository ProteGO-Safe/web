import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from './Dashboard';
import { fetchLabTestSubscription } from '../../store/actions/nativeData';

const DashboardContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLabTestSubscription());
    // eslint-disable-next-line
  }, []);
  return <Dashboard />;
};

export default DashboardContainer;
