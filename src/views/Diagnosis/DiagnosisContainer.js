import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getDiagnosis, clearDiagnosis } from '../../store/actions/diagnosis';
import { getTriage } from '../../store/actions/triage';

import Diagnosis from './Diagnosis';
import { Summary } from './components/Summary';

import './Diagnosis.scss';

const DiagnosisContainer = () => {
  const dispatch = useDispatch();
  const { sex, age } = useSelector(state => state.user);

  const {
    evidence,
    question,
    isLoading,
    isResetting,
    inProgress
  } = useSelector(state => state.diagnosis);

  useEffect(() => {
    const data = {
      sex,
      age,
      evidence: []
    };
    dispatch(getDiagnosis(data));
  }, [isResetting]);

  useEffect(() => {
    if (!inProgress && evidence.length > 0) {
      const data = {
        sex,
        age,
        evidence
      };
      dispatch(getTriage(data));
    }
  }, [inProgress, evidence]);

  if (!inProgress && evidence.length > 0) {
    return <Summary question={question} />;
  }

  const onClearDiagnosis = () => dispatch(clearDiagnosis());

  return (
    <Diagnosis
      isLoading={isLoading}
      question={question}
      evidence={evidence}
      inProgress={inProgress}
      clearDiagnosis={onClearDiagnosis}
    />
  );
};

export default DiagnosisContainer;
