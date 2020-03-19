import React from 'react';
import { Formik } from 'formik';
import { FormProvider } from '../../context/FormContext';

import Registration from './Registration';

const RegistrationContainer = () => {
  const initialValues = {
    name: ''
  };

  const handleSubmit = () => null;

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {props => (
        <FormProvider formProps={props}>
          <Registration />
        </FormProvider>
      )}
    </Formik>
  );
};

export default RegistrationContainer;
