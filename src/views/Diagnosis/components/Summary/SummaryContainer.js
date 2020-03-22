import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Summary from './Summary';
import { addRiskTest } from '../../../../store/actions/risktest';
import useLoaderContext from '../../../../hooks/useLoaderContext';

const SummaryContainer = () => {
  const history = useHistory();
  const { setLoader } = useLoaderContext();
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

  useEffect(() => {
    setLoader(true);
    setTimeout(() => setLoader(false), 5000);
  }, []);

  return <Summary onSave={save} />;
};

export default SummaryContainer;
