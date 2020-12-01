import React from 'react';
import { FormGroup } from '@material-ui/core';
import { useFormikContext } from 'formik';

import { Button, Radio, Select, T } from '../../..';
import {
  FIELD_SMOKE,
  FIELD_SMOKE_NUMBER,
  VALUE_SMOKE_NUMBER_1,
  VALUE_SMOKE_NUMBER_2,
  VALUE_SMOKE_NUMBER_3,
  VALUE_SMOKE_NUMBER_4,
  VALUE_SMOKE_NUMBER_5
} from '../../../../constants';

import { Actions, Label, Title } from '../../ImprintFiller.styled';
import * as Styled from './Smoke.styled';

const Smoke = () => {
  const { setFieldValue, values } = useFormikContext();

  const options = [
    VALUE_SMOKE_NUMBER_1,
    VALUE_SMOKE_NUMBER_2,
    VALUE_SMOKE_NUMBER_3,
    VALUE_SMOKE_NUMBER_4,
    VALUE_SMOKE_NUMBER_5
  ].map(option => ({ label: <T i18nKey={option} />, value: option }));

  const isSmoking = values[FIELD_SMOKE] === <T i18nKey="yes" />;
  const noSmoking = values[FIELD_SMOKE] === <T i18nKey="no" />;

  const handleSmokeRadio = value => {
    if (value === <T i18nKey="yes" />) {
      setFieldValue(FIELD_SMOKE, <T i18nKey="yes" />);
      setFieldValue(FIELD_SMOKE_NUMBER, VALUE_SMOKE_NUMBER_1);
      return;
    }

    setFieldValue(FIELD_SMOKE, <T i18nKey="no" />);
    setFieldValue(FIELD_SMOKE_NUMBER, null);
  };

  return (
    <>
      <Title>
        <T i18nKey="smoke_text1" />
      </Title>
      <FormGroup>
        <Radio
          checked={isSmoking}
          label={
            <Label>
              <T i18nKey="smoke_text2" />
            </Label>
          }
          name={FIELD_SMOKE}
          onChange={() => handleSmokeRadio(<T i18nKey="yes" />)}
        />
        <Radio
          checked={noSmoking}
          label={
            <Label>
              <T i18nKey="smoke_text3" />
            </Label>
          }
          name={FIELD_SMOKE}
          onChange={() => handleSmokeRadio(<T i18nKey="no" />)}
        />
      </FormGroup>
      {isSmoking && (
        <Styled.SelectWrapper>
          <Select
            changeHandler={setFieldValue}
            label={<T i18nKey="smoke_text4" />}
            name={FIELD_SMOKE_NUMBER}
            options={options}
            value={values[FIELD_SMOKE_NUMBER]}
          />
        </Styled.SelectWrapper>
      )}
      <Actions>
        <Button
          disabled={!values[FIELD_SMOKE]}
          onClick={() => setFieldValue('step', 5)}
          label={<T i18nKey="button_next" />}
        />
      </Actions>
    </>
  );
};

export default Smoke;
