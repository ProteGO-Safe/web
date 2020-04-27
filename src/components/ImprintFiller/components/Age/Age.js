import React from 'react';
import { useFormikContext } from 'formik';

import { FIELD_AGE } from '../../../../constants';
import { Button, TextField } from '../../..';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

import { Actions, Title } from '../../ImprintFiller.styled';

const Age = () => {
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
        setFieldValue('step', 4);
        setErrors({});
      }
    });
  };

  const disabled = !values[FIELD_AGE];

  return (
    <>
      <Title>Ile masz lat?</Title>
      <TextField
        error={errors[FIELD_AGE]}
        placeholder="wiek"
        onChange={handleChange}
        name={FIELD_AGE}
        type="number"
        value={values[FIELD_AGE]}
      />
      <Actions>
        <Button
          disabled={disabled}
          onClick={handleClick}
          icon={Icon}
          size="medium"
          text="Dalej"
        />
      </Actions>
    </>
  );
};

export default Age;
