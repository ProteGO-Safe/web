import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getDiagnosis } from '../../store/actions/diagnosis';
import { Single } from './components/Single';
import { GroupSingle } from './components/GroupSingle';
import { GroupMultiple } from './components/GroupMultiple';

const DiagnosisContainer = () => {
  const dispatch = useDispatch();
  const { sex, age } = useSelector(state => state.user);

  const { question, inProgress } = useSelector(state => state.diagnosis);

  useEffect(() => {
    const data = {
      sex,
      age,
      evidence: []
    };
    dispatch(getDiagnosis(data));
  }, []);

  // useEffect(() => {
  //   if ()
  //   dispatch(getDiagnosis(data));
  // }, [inProgress]);

  if (question && question.type === 'single') {
    return <Single question={question} />;
  }
  if (question && question.type === 'group_single') {
    return <GroupSingle question={question} />;
  }
  if (question && question.type === 'group_multiple') {
    return <GroupMultiple question={question} />;
  }
  return null;
};

export default DiagnosisContainer;
