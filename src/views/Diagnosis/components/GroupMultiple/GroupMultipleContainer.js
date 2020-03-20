import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import GroupMultiple from './GroupMultiple';
import { getDiagnosis } from '../../../../store/actions/diagnosis';
import { VALUE_ABSENT } from '../../../../constants';

const GroupMultipleContainer = ({ question }) => {
  const dispatch = useDispatch();
  const { sex, age } = useSelector(state => state.user);
  const { evidence: existingEvidence } = useSelector(state => state.diagnosis);

  const generateInitialValues = () => {
    const initialValues = {};
    question.items.forEach(item => (initialValues[item.id] = VALUE_ABSENT));
    return initialValues;
  };

  const handleSubmit = values => {
    const evidence = [];
    for (let [key, value] of Object.entries(values)) {
      evidence.push({
        id: key,
        choice_id: value
      });
    }

    const data = {
      sex,
      age,
      evidence: [...existingEvidence, ...evidence]
    };
    dispatch(getDiagnosis(data));
  };

  return (
    <Formik initialValues={generateInitialValues()} onSubmit={handleSubmit}>
      <GroupMultiple text={question.text} items={question.items} />
    </Formik>
  );
};

GroupMultipleContainer.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        choices: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
          })
        )
      })
    )
  }).isRequired
};

export default GroupMultipleContainer;
