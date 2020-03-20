import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { saveUser } from '../../store/actions/user';

import Registration from './Registration';
import {
  FIELD_AGE,
  FIELD_CHRONIC_SICK,
  FIELD_CHRONIC_SICK_OTHER,
  FIELD_GENDER,
  FIELD_NAME
} from '../../constants';

const RegistrationContainer = () => {
  const dispatch = useDispatch();

  const initialValues = {
    [FIELD_AGE]: '',
    [FIELD_GENDER]: '',
    [FIELD_NAME]: '',
    [FIELD_CHRONIC_SICK]: '',
    [FIELD_CHRONIC_SICK_OTHER]: '',
    step: 'install_app_1',
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
