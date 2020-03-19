import React from 'react';
import { Formik } from 'formik';
import { FormProvider } from '../../context/FormContext';

import Registration from './Registration';

const RegistrationContainer = ({ initialValues, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {props => (
        <FormProvider formProps={props}>
          <Registration />
        </FormProvider>
      )}
    </Formik>
  );
};

export default RegistrationContainer;
