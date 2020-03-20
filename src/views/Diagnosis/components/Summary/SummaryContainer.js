import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Summary from './Summary';
import { clearDiagnosis } from '../../../../store/actions/diagnosis';
import { addQuestionnaire } from '../../../../store/actions/questionnaires';

const SummaryContainer = () => {
  const { question, evidence } = useSelector(state => state.diagnosis);
  const { triageLevel, label, description } = useSelector(
    state => state.triage
  );
  const dispatch = useDispatch();
  const save = () => {
    console.log(question)
    const data = {
      question,
      evidence,
      triageLevel,
      label,
      description
    };
    dispatch(addQuestionnaire(data));
  };

  const tryAgain = () => dispatch(clearDiagnosis());

  return <Summary onSave={save} onTryAgain={tryAgain} />;
};

export default SummaryContainer;
