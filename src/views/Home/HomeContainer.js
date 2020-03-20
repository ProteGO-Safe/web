import React from 'react';
import { useSelector } from 'react-redux';

import Home from './Home';
import { Diagnosis } from '../Diagnosis';

const HomeContainer = () => {
  const questionnaires = useSelector(state => state.questionnaires);

  if (Object.keys(questionnaires).length === 0) {
    return <Diagnosis />;
  }
  return <Home />;
};

export default HomeContainer;
