import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormikContext } from 'formik';
import isequal from 'lodash.isequal';

import { DIAGNOSIS_FORM_FIELDS } from '../../diagnosis.constants';
import Form from './Form';
import { Age } from './components';
import { SummaryRiskTest } from '../../../SummaryRiskTest';
import { IS_NOT_ELDERLY } from './components/Age/age.constants';
import { getDiagnosis } from '../../../../services/diagnosisLogic/diagnosisLogic';
import { Information } from '../../../Information';
import Routes from '../../../../routes';
import usePageNumber from '../../../../hooks/usePageNumber';

const FormContainer = ({ onFinish }) => {
  const history = useHistory();
  const { page: urlPage } = usePageNumber();
  const { setFieldValue, values } = useFormikContext();
  const [evidence, setEvidence] = useState(undefined);
  const [question, setQuestion] = useState(undefined);
  const [allQuestions, setAllQuestions] = useState([]);
  const [direction, setDirection] = useState(undefined);
  const [changeHistoryMarker, setChangeHistoryMarker] = useState(0);

  useEffect(() => {
    history.listen((newLocation, action) => {
      setDirection(action);
      setChangeHistoryMarker(prev => prev + 1);
    });
  }, [history]);

  const addIfNotExists = (list = [], fetchedQuestion) => {
    const existingQuestion = list.find(value =>
      isequal(value, fetchedQuestion)
    );
    if (existingQuestion) {
      return [...list];
    }
    return [...list, fetchedQuestion];
  };

  const finish = useCallback(() => {
    const isElderly = values[DIAGNOSIS_FORM_FIELDS.AGE] !== IS_NOT_ELDERLY;
    onFinish(evidence, isElderly, allQuestions);
  }, [evidence, allQuestions, onFinish, values]);

  useEffect(() => {
    if (evidence) {
      finish();
    }
    // eslint-disable-next-line
  }, [evidence]);

  useEffect(() => {
    const questions = [...values[DIAGNOSIS_FORM_FIELDS.QUESTIONS]];

    if (direction === 'POP') {
      if (questions.length === 0) {
        return;
      }
      questions.pop();
      setFieldValue(DIAGNOSIS_FORM_FIELDS.QUESTIONS, questions);
    }
    const { question: fetchedQuestion, should_stop: shouldStop } = getDiagnosis(
      {
        evidence: questions.flat(1)
      }
    );
    setQuestion(fetchedQuestion);
    setAllQuestions(prev => addIfNotExists(prev, fetchedQuestion));

    if (shouldStop) {
      setEvidence(questions.flat(1));
    } else {
      setEvidence(undefined);
    }
    // eslint-disable-next-line
  }, [changeHistoryMarker]);

  const nextPage = () => {
    history.push({
      pathname: Routes.Diagnosis,
      search: `?p=${urlPage + 1}`
    });
  };

  const back = () => {
    history.goBack();
  };

  if (urlPage === 1) {
    return <Information hideInformation={() => nextPage()} />;
  }

  if (urlPage === 2) {
    return <Age onBack={() => back()} onNext={() => nextPage()} />;
  }

  if (evidence) {
    return <SummaryRiskTest onBack={() => back()} />;
  }

  if (!question) {
    return null;
  }

  return <Form onBack={back} question={question} onNext={() => nextPage()} />;
};

export default FormContainer;
