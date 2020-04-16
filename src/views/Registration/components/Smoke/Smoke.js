import React from 'react';
import { FormGroup } from '@material-ui/core';
import { useFormikContext } from 'formik';

import { Button, Radio, Select } from '../../../../components';
import {
  FIELD_SMOKE,
  FIELD_SMOKE_NUMBER,
  VALUE_SMOKE_NO,
  VALUE_SMOKE_NUMBER_1,
  VALUE_SMOKE_NUMBER_2,
  VALUE_SMOKE_NUMBER_3,
  VALUE_SMOKE_NUMBER_4,
  VALUE_SMOKE_NUMBER_5,
  VALUE_SMOKE_YES
} from '../../../../constants';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

import { Actions, Label, Title } from '../../Registration.styled';

const Smoke = () => {
  const { setFieldValue, values } = useFormikContext();

  const options = [
    VALUE_SMOKE_NUMBER_1,
    VALUE_SMOKE_NUMBER_2,
    VALUE_SMOKE_NUMBER_3,
    VALUE_SMOKE_NUMBER_4,
    VALUE_SMOKE_NUMBER_5
  ].map(option => ({ label: option, value: option }));

  const isSmoking = values[FIELD_SMOKE] === VALUE_SMOKE_YES;
  const noSmoking = values[FIELD_SMOKE] === VALUE_SMOKE_NO;

  const handleSmokeRadio = value => {
    if (value === VALUE_SMOKE_YES) {
      setFieldValue(FIELD_SMOKE, VALUE_SMOKE_YES);
      setFieldValue(FIELD_SMOKE_NUMBER, VALUE_SMOKE_NUMBER_1);
      return;
    }

    setFieldValue(FIELD_SMOKE, VALUE_SMOKE_NO);
    setFieldValue(FIELD_SMOKE_NUMBER, null);
  };

  return (
    <>
      <Title>Czy palisz papierosy lub inne wyroby tytoniowe?</Title>
      <FormGroup>
        <Radio
          checked={isSmoking}
          label={<Label>Tak</Label>}
          name={FIELD_SMOKE}
          onChange={() => handleSmokeRadio(VALUE_SMOKE_YES)}
        />
        <Radio
          checked={noSmoking}
          label={<Label>Nie</Label>}
          name={FIELD_SMOKE}
          onChange={() => handleSmokeRadio(VALUE_SMOKE_NO)}
        />
      </FormGroup>
      {isSmoking && (
        <Select
          changeHandler={setFieldValue}
          label="Liczba wypalanych papierosów"
          name={FIELD_SMOKE_NUMBER}
          options={options}
          required
          value={values[FIELD_SMOKE_NUMBER]}
        />
      )}
      <Actions>
        <Button
          disabled={!values[FIELD_SMOKE]}
          onClick={() => setFieldValue('step', 7)}
          icon={Icon}
          size="medium"
          text="Dalej"
        />
      </Actions>
    </>
  );
};

export default Smoke;
