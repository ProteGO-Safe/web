import React from 'react';
import { useFormikContext } from 'formik';
import { Button, TextField } from '../../..';
import { FIELD_NAME } from '../../../../constants';

import { Actions } from '../../ImprintFiller.styled';
import './Name.scss';

const Name = ({ handleClick }) => {
  const { errors, handleChange, values } = useFormikContext();

  const disabled = (() => {
    return !values[FIELD_NAME];
  })();

  return (
    <>
      <TextField
        error={errors[FIELD_NAME]}
        label="Jak aplikacja może się do Ciebie zwracać?"
        placeholder="Twój nick lub pseudonim"
        onChange={handleChange}
        name={FIELD_NAME}
        value={values[FIELD_NAME]}
        info="Podpowiedź: nie podawaj swojego nazwiska."
      />

      <Actions>
        <Button disabled={disabled} onClick={handleClick} label="Dalej" />
      </Actions>
    </>
  );
};

export default Name;
