import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getDiagnosis } from '../../store/actions/diagnosis';

import Diagnosis from './Diagnosis';

import './Diagnosis.scss';

const DiagnosisContainer = () => {
  const dispatch = useDispatch();
  const { sex, age } = useSelector(state => state.user);

  const { question, isLoading } = useSelector(state => state.diagnosis);

  useEffect(() => {
    const data = {
      sex,
      age,
      evidence: []
    };
    dispatch(getDiagnosis(data));
  }, []);

  return <Diagnosis isLoading={isLoading} question={question} />;
};

export default DiagnosisContainer;
