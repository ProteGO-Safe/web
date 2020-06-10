import React from 'react';
import { useHistory } from 'react-router-dom';

import Home from './Home';
import { Diagnosis } from '../Diagnosis';
import useFilledDays from '../../hooks/useFilledDays';

const HomeContainer = () => {
  const history = useHistory();
  const filledDays = useFilledDays();

  if (filledDays.length === 0) {
    return <Diagnosis />;
  }

  const goToDiagnosis = () => {
    history.push('/diagnosis');
  };

  return <Home onClickGoToDiagnosis={goToDiagnosis} />;
};

export default HomeContainer;
