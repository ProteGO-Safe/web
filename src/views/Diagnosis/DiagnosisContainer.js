import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { getDiagnosis } from '../../store/actions/diagnosis';
import { Single } from './components/Single';

const DiagnosisContainer = () => {
  const dispatch = useDispatch();

  const {
    sex,
    age
  } = useSelector(state => state.user);

  const {
    question
  } = useSelector(state => state.diagnosis);

  useEffect(() => {
    const data = {
      sex,
      age,
      evidence: []
    };
    dispatch(getDiagnosis(data));
  }, []);

  if (question && question.type === 'single') {
    return <Single question={question}/>;
  }
  if (question && question.type === 'group_single') {
    return null;
  }
  if (question && question.type === 'group_multiple') {
    return null;
  }
  return null;
};

export default DiagnosisContainer;
