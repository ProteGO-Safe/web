import React from 'react';
import { useSelector } from 'react-redux';

import Home from './Home';
import { Diagnosis } from '../Diagnosis';
import { Information } from '../Information';

const HomeContainer = () => {
  const riskTest = useSelector(state => state.riskTest);
  const { showInformationScreen } = useSelector(state => state.user);

  if (showInformationScreen) {
    return <Information />;
  }

  if (Object.keys(riskTest).length === 0) {
    return <Diagnosis />;
  }
  return <Home />;
};

export default HomeContainer;
