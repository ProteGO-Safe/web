import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { saveUser } from '../../store/actions/user';

import {
  FIELD_AGE,
  FIELD_CHRONIC_SICK,
  FIELD_CHRONIC_SICK_OTHER,
  FIELD_SEX,
  FIELD_NAME
} from '../../constants';
import Registration from './Registration';

const RegistrationContainer = () => {
  const dispatch = useDispatch();

  const initialValues = {
    [FIELD_AGE]: '',
    [FIELD_SEX]: '',
    [FIELD_NAME]: '',
    [FIELD_CHRONIC_SICK]: '',
    [FIELD_CHRONIC_SICK_OTHER]: '',
    step: 1,
    term1: false,
    term2: false
  };

  const handleSubmit = form => dispatch(saveUser(form));

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Registration />
    </Formik>
  );
};

export default RegistrationContainer;
