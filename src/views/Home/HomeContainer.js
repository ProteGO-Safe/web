import React from 'react';
import { useHistory } from 'react-router-dom';

import Home from './Home';
import { Diagnosis } from '../Diagnosis';
import useFilledDays from '../../hooks/useFilledDays';
import { isAndroidWebView } from '../../utills/native';
import { NotSupported } from './components/NotSupported';

const HomeContainer = () => {
  const history = useHistory();
  const filledDays = useFilledDays();

  if (isAndroidWebView()) {
    return <NotSupported />;
  }

  if (filledDays.length === 0) {
    return <Diagnosis />;
  }

  const goToDiagnosis = () => {
    history.push('/diagnosis');
  };

  return <Home onClickGoToDiagnosis={goToDiagnosis} />;
};

export default HomeContainer;
