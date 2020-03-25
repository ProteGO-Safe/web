import React from 'react';
import { useSelector } from 'react-redux';
import Imprint from './Imprint';

const ImprintContainer = () => {
  const user = useSelector(state => state.user);
  return <Imprint user={user} />;
};

export default ImprintContainer;
