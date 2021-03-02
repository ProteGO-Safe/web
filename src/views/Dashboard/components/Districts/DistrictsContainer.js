import React from 'react';
import { useSelector } from 'react-redux';
import { getSubscribedDistricts } from '../../../../store/selectors/restrictions';
import Districts from './Districts';

const DistrictsContainer = () => {
  const subscribedDistricts = useSelector(getSubscribedDistricts);

  return <Districts items={subscribedDistricts} />;
};

export default DistrictsContainer;
