import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import GroupSingle from './GroupSingle';
import { getDiagnosis } from '../../../../store/actions/diagnosis';
import { FIELD_CHOICE_ID, FIELD_ITEM_ID } from '../../../../constants';
import { questionPropType } from '../../prop-types';

const GroupSingleContainer = ({ question }) => {
  const dispatch = useDispatch();

  const { evidence: existingEvidence } = useSelector(state => state.diagnosis);

  const initialValues = {
    [FIELD_ITEM_ID]: '',
    [FIELD_CHOICE_ID]: ''
  };

  const handleSubmit = values => {
    const data = {
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
  question: questionPropType
};

export default GroupSingleContainer;
