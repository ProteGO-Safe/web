import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from './Dashboard';
import { fetchActivities } from '../../store/actions/activities';

const DashboardContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return <Dashboard />;
};

export default DashboardContainer;
