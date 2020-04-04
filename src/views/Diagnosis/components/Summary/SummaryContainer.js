import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Summary from './Summary';
import { addRiskTest } from '../../../../store/actions/risktest';
import useLoaderContext from '../../../../hooks/useLoaderContext';

import useMenuContext from '../../../../hooks/useMenuContext';

const SummaryContainer = () => {
  const history = useHistory();
  const isDesktop = window.innerWidth > 768;
  const { setVisible } = useMenuContext();
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

    if (isDesktop) {
      setVisible(true);
    }
    dispatch(addRiskTest(data));
    setLoader(true);
    setTimeout(() => setLoader(false), 5000);
    history.push('/');
  };

  return <Summary onSave={save} />;
};

export default SummaryContainer;
