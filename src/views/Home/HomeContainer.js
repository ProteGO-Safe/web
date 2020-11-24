import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';
import { getSubscribedDistricts } from '../../store/selectors/restrictions';
import useCovidStateCleaner from '../../hooks/useCovidStateCleaner';

const HomeContainer = () => {
  useCovidStateCleaner();
  const subscribedDistricts = useSelector(getSubscribedDistricts);

  return <Home subscribedDistricts={subscribedDistricts} />;
};

export default HomeContainer;
