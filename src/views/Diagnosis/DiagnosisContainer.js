import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getDiagnosis, clearDiagnosis } from '../../store/actions/diagnosis';
import { fetchTriage } from '../../store/actions/triage';

import Diagnosis from './Diagnosis';
import { Summary } from './components/Summary';

import './Diagnosis.scss';
import useLoaderContext from '../../hooks/useLoaderContext';
import { Information } from '../Information/index';
import { Age } from './components/Age';

const DiagnosisContainer = () => {
  const dispatch = useDispatch();
  const { setLoader } = useLoaderContext();
  const [showInformation, setShowInformation] = useState(true);
  const [moreThan65, setMoreThan65] = useState(undefined);

  const { evidence, question, isLoading, inProgress } = useSelector(
    state => state.diagnosis
  );

  useEffect(() => {
    if (isLoading) {
      setLoader(true);
      return;
    }
    setLoader(false);
  }, [isLoading, setLoader]);

  useEffect(() => {
    const data = {
      evidence: []
    };
    dispatch(getDiagnosis(data));
  }, [moreThan65, dispatch]);

  useEffect(() => {
    if (!inProgress && evidence.length > 0 && moreThan65 !== undefined) {
      const data = {
        moreThan65,
        evidence
      };
      dispatch(fetchTriage(data));
    }
  }, [inProgress, evidence, moreThan65, dispatch]);

  const onClearDiagnosis = () => dispatch(clearDiagnosis());

  const isCountryQuestion = () => {
    return question.items.some(value => value.id === 'p_5');
  };

  if (!inProgress && evidence.length > 0) {
    return <Summary />;
  }

  if (showInformation) {
    return <Information hideInformation={() => setShowInformation(false)} />;
  }

  if (moreThan65 === undefined) {
    return (
      <Age onBack={() => setShowInformation(true)} onNext={setMoreThan65} />
    );
  }

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
