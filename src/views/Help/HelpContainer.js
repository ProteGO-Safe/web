import React from 'react';
import { useSelector } from 'react-redux';

import Help from './Help';
import { Diagnosis } from '../Diagnosis';

const HelpContainer = () => {
  const riskTest = useSelector(state => state.riskTest);

  if (Object.keys(riskTest).length === 0) {
    return <Diagnosis />;
  }
  return <Help />;
};

export default HelpContainer;
