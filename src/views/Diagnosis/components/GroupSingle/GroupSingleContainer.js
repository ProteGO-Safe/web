import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import GroupSingle from './GroupSingle';
import { getDiagnosis } from '../../../../store/actions/diagnosis';
import { FIELD_CHOICE_ID, FIELD_ITEM_ID } from '../../../../constants';

const GroupSingleContainer = ({ question }) => {
  const dispatch = useDispatch();

  const { sex, age } = useSelector(state => state.user);
  const { evidence: existingEvidence } = useSelector(state => state.diagnosis);

  const initialValues = {
    [FIELD_ITEM_ID]: '',
    [FIELD_CHOICE_ID]: ''
  };

  const handleSubmit = values => {
    console.log(values);
    const data = {
      sex,
      age,
      evidence: [
        ...existingEvidence,
        {
          id: values[FIELD_ITEM_ID],
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
      <GroupSingle text={question.text} items={question.items} />
    </Formik>
  );
};

GroupSingleContainer.propTypes = {
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

export default GroupSingleContainer;
