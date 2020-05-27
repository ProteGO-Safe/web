import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getDiagnosis, clearDiagnosis } from '../../store/actions/diagnosis';
import { fetchTriage } from '../../store/actions/triage';

import Diagnosis from './Diagnosis';
import { Summary } from './components/Summary';

import './Diagnosis.scss';
import useLoaderContext from '../../hooks/useLoaderContext';
import { Information } from '../Information/index';

const DiagnosisContainer = () => {
  const dispatch = useDispatch();
  const { setLoader } = useLoaderContext();
  const { sex, age } = useSelector(state => state.user);
  const [showInformation, setShowInformation] = useState(true);

  const { evidence, question, isLoading, inProgress } = useSelector(
    state => state.diagnosis
  );

  useEffect(() => {
    if (isLoading) {
      setLoader(true);
      return;
    }
    setLoader(false);
    // eslint-disable-next-line
  }, [isLoading]);

  useEffect(() => {
    const data = {
      sex,
      age,
      evidence: []
    };
    dispatch(getDiagnosis(data));
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (!inProgress && evidence.length > 0) {
      const data = {
        sex,
        age,
        evidence
      };
      dispatch(fetchTriage(data));
    }
    // eslint-disable-next-line
  }, [inProgress, evidence]);

  if (!inProgress && evidence.length > 0) {
    return <Summary />;
  }

  const onClearDiagnosis = () => dispatch(clearDiagnosis());

  if (showInformation) {
    return <Information hideInformation={() => setShowInformation(false)} />;
  }

  const isCountryQuestion = () => {
    return question.items.some(value => value.id === 'p_5');
  };

  return (
    <Diagnosis
      showNavigation={false}
      isLoading={isLoading}
      question={question}
      evidence={evidence}
      inProgress={inProgress}
      isCountryQuestion={isCountryQuestion}
      clearDiagnosis={onClearDiagnosis}
    />
  );
};

export default DiagnosisContainer;
