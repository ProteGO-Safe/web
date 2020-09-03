import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import './Diagnosis.scss';
import { DIAGNOSIS_FORM_INITIAL_VALUES } from './diagnosis.constants';
import { Form } from './components';
import { fetchTriage } from '../../store/actions/triage';
import { addRiskTest } from '../../store/actions/riskTest';
import useLoaderContext from '../../hooks/useLoaderContext';

const DiagnosisContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { setLoader } = useLoaderContext();

  const saveRiskTest = (triage, evidence, allQuestions) => {
    const { triage_level: triageLevel, description } = triage;
    const data = {
      allQuestions: allQuestions.filter(item => item),
      evidence,
      triageLevel,
      description
    };

    dispatch(addRiskTest(data));
    setLoader(true);
    setTimeout(() => setLoader(false), 5000);
    history.push('/');
  };

  const finish = (evidence, isElderly, allQuestions) => {
    const data = {
      isElderly,
      evidence
    };
    dispatch(fetchTriage(data)).then(triage =>
      saveRiskTest(triage, evidence, allQuestions)
    );
  };

  return (
    <Formik initialValues={DIAGNOSIS_FORM_INITIAL_VALUES}>
      <Form onFinish={finish} />
    </Formik>
  );
};

export default DiagnosisContainer;
