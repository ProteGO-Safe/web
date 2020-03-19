import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import Single from './Single';
import { getDiagnosis } from '../../../../store/actions/diagnosis';
import { FIELD_ID } from '../../../../constants';

const SingleContainer = ({ question }) => {
  const dispatch = useDispatch();

  const {
    sex,
    age
  } = useSelector(state => state.user);

  const initialValues = {
    [FIELD_ID]: ''
  };

  const handleSubmit = values => {
    const data = {
      sex,
      age,
      evidence: [{
        id: question.items[0].id,
        choice_id: values[FIELD_ID]
      }]
    };
    dispatch(getDiagnosis(data));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Single text={question.text} choices={question.items[0].choices}/>
    </Formik>
  );
};

SingleContainer.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        choices: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired
        })),
      })
    )
  }).isRequired
};

export default SingleContainer;
