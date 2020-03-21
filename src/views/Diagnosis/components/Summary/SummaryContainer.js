import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Summary from './Summary';
import { addRiskTest } from '../../../../store/actions/risktest';

const SummaryContainer = () => {
  const history = useHistory();
  const { allQuestions, evidence } = useSelector(state => state.diagnosis);
  const { triageLevel, label, description } = useSelector(
    state => state.triage
  );
  const dispatch = useDispatch();
  const save = () => {
    const data = {
      allQuestions,
      evidence,
      triageLevel,
      label,
      description
    };
    dispatch(addRiskTest(data));
    history.push('/');
  };

  return <Summary onSave={save} />;
};

export default SummaryContainer;
