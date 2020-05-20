import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Home from './Home';
import { Diagnosis } from '../Diagnosis';
import useFilledDays from '../../hooks/useFilledDays';
import { fetchServicesStatus } from '../../store/actions/nativeData';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const filledDays = useFilledDays();

  useEffect(() => {
    dispatch(fetchServicesStatus());
  }, [dispatch]);

  if (filledDays.length === 0) {
    return <Diagnosis />;
  }

  const goToDiagnosis = () => {
    history.push('/diagnosis');
  };

  return <Home onClickGoToDiagnosis={goToDiagnosis} />;
};

export default HomeContainer;
