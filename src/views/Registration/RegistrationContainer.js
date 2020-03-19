import React from 'react';
import { Formik } from 'formik';

import Registration from './Registration';
import {FIELD_AGE, FIELD_CHRONIC_SICK, FIELD_CHRONIC_SICK_OTHER, FIELD_GENDER, FIELD_NAME} from '../../constants';

const RegistrationContainer = () => {
  const initialValues = {
    [FIELD_AGE]: '',
    [FIELD_GENDER]: '',
    [FIELD_NAME]: '',
    [FIELD_CHRONIC_SICK]: '',
    [FIELD_CHRONIC_SICK_OTHER]: '',
    step: 4,
    term1: false,
    term2: false
  };

  const handleSubmit = () => null;

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Registration />
    </Formik>
  );
};

export default RegistrationContainer;
