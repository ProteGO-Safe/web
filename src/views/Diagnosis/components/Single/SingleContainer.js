import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import Single from './Single';
import { getDiagnosis } from '../../../../store/actions/diagnosis';
import { FIELD_CHOICE_ID } from '../../../../constants';
import { questionPropType } from '../../prop-types';

const SingleContainer = ({ question }) => {
  const dispatch = useDispatch();

  const { evidence: existingEvidence } = useSelector(state => state.diagnosis);

  const initialValues = {
    [FIELD_CHOICE_ID]: ''
  };

  const handleSubmit = values => {
    const data = {
      evidence: [
        ...existingEvidence,
        {
          id: question.items[0].id,
          choice_id: values[FIELD_CHOICE_ID]
        }
      ]
    };
    dispatch(getDiagnosis(data)).then(() =>
      window.scrollTo ? window.scrollTo(0, 0) : null
    );
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Single text={question.text} choices={question.items[0].choices} />
    </Formik>
  );
};

SingleContainer.propTypes = {
  question: questionPropType
};

export default SingleContainer;
