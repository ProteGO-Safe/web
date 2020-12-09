import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Home';
import { getSubscribedDistricts } from '../../store/selectors/restrictions';
import useCovidStateCleaner from '../../hooks/useCovidStateCleaner';
import { fetchActivities } from '../../store/actions/activities';

const HomeContainer = () => {
  const dispatch = useDispatch();
  useCovidStateCleaner();
  const subscribedDistricts = useSelector(getSubscribedDistricts);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return <Home subscribedDistricts={subscribedDistricts} />;
};

export default HomeContainer;
