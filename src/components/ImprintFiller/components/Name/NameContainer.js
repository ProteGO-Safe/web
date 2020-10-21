import React from 'react';
import { useFormikContext } from 'formik';
import { FIELD_NAME, FIELD_TERM1 } from '../../../../constants';

import './Name.scss';
import Name from './Name';

const NameContainer = () => {
  const {
    initialValues,
    setErrors,
    setFieldValue,
    validateForm
  } = useFormikContext();

  const fields = [FIELD_NAME, FIELD_TERM1];

  const goNextStep = () => {
    setFieldValue('step', 2);
    setErrors({});
  };

  const handleNext = () => {
    validateForm().then(error => {
      if (!fields.some(field => Object.keys(error).includes(field))) {
        goNextStep();
      }
    });
  };

  const handleSkip = () => {
    setFieldValue(FIELD_NAME, initialValues[FIELD_NAME]);
    goNextStep();
  };

  return <Name handleNext={handleNext} handleSkip={handleSkip} />;
};

export default NameContainer;
