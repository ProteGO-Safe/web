import React from 'react';
import { useFormikContext } from 'formik';
import { FIELD_NAME, FIELD_TERM1 } from '../../../../constants';

import './Name.scss';
import Name from './Name';

const NameContainer = () => {
  const { setErrors, setFieldValue, validateForm } = useFormikContext();

  const fields = [FIELD_NAME, FIELD_TERM1];

  const handleClick = () => {
    validateForm().then(error => {
      if (!fields.some(field => Object.keys(error).includes(field))) {
        setFieldValue('step', 2);
        setErrors({});
      }
    });
  };

  return <Name handleClick={handleClick} />;
};

export default NameContainer;
