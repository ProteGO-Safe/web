import React from 'react';
import { useFormikContext } from 'formik';
import { FormGroup } from '@material-ui/core';

import { FIELD_SEX, VALUE_MAN, VALUE_WOMAN } from '../../../../constants';
import { Button, Radio } from '../../../../components';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

import { Actions, Label, Title } from '../../Registration.styled';

const Sex = () => {
  const { setFieldValue, values } = useFormikContext();

  const handleChange = (field, value) => {
    setFieldValue(field, value);
  };

  const disabled = !values[FIELD_SEX];

  return (
    <>
      <Title>Kim jesteś?</Title>

      <FormGroup>
        <Radio
          checked={values[FIELD_SEX] === VALUE_WOMAN}
          label={<Label>Kobieta</Label>}
          name={FIELD_SEX}
          onChange={() => handleChange(FIELD_SEX, VALUE_WOMAN)}
        />
        <Radio
          checked={values[FIELD_SEX] === VALUE_MAN}
          label={<Label>Mężczyzna</Label>}
          name={FIELD_SEX}
          onChange={() => handleChange(FIELD_SEX, VALUE_MAN)}
        />
      </FormGroup>
      <Actions>
        <Button
          disabled={disabled}
          onClick={() => setFieldValue('step', 3)}
          icon={Icon}
          size="medium"
          text="Dalej"
        />
      </Actions>
    </>
  );
};

export default Sex;
