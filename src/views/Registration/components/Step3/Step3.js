import React from 'react';
import { useFormikContext } from 'formik';
import { Button, Container, Input } from '../../../../components';

import { FIELD_AGE } from '../../../../constants';
import './Step3.scss';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const Step3 = () => {
  const {
    errors,
    handleChange,
    setErrors,
    setFieldValue,
    values,
    validateForm
  } = useFormikContext();

  const fields = [FIELD_AGE];

  const handleClick = () => {
    validateForm().then(error => {
      if (!fields.some(field => Object.keys(error).includes(field))) {
        setFieldValue('step', 5);
        setErrors({});
      }
    });
  };

  return (
    <Container>
      <h3>Ile masz lat?</h3>
      <Input
        error={errors[FIELD_AGE]}
        placeholder="wiek"
        onChange={handleChange}
        max={150}
        min={1}
        name={FIELD_AGE}
        type="number"
        value={values[FIELD_AGE]}
      />
      <Button onClick={handleClick} icon={Icon} size="medium" text="Dalej" />
    </Container>
  );
};

export default Step3;
