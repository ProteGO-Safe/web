import React from 'react';
import { withTranslation } from 'react-i18next';
import { FormGroup } from '@material-ui/core';
import { useFormikContext } from 'formik';

import { Button, Radio, Select } from '../../..';
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

const Smoke = ({ t }) => {
  const { setFieldValue, values } = useFormikContext();

  const options = [
    VALUE_SMOKE_NUMBER_1,
    VALUE_SMOKE_NUMBER_2,
    VALUE_SMOKE_NUMBER_3,
    VALUE_SMOKE_NUMBER_4,
    VALUE_SMOKE_NUMBER_5
  ].map(option => ({ label: t(option), value: option }));

  const isSmoking = values[FIELD_SMOKE] === t('yes');
  const noSmoking = values[FIELD_SMOKE] === t('no');

  const handleSmokeRadio = value => {
    if (value === t('yes')) {
      setFieldValue(FIELD_SMOKE, t('yes'));
      setFieldValue(FIELD_SMOKE_NUMBER, VALUE_SMOKE_NUMBER_1);
      return;
    }

    setFieldValue(FIELD_SMOKE, t('no'));
    setFieldValue(FIELD_SMOKE_NUMBER, null);
  };

  return (
    <>
      <Title>{t('smoke_text1')}</Title>
      <FormGroup>
        <Radio
          checked={isSmoking}
          label={<Label>{t('smoke_text2')}</Label>}
          name={FIELD_SMOKE}
          onChange={() => handleSmokeRadio(t('yes'))}
        />
        <Radio
          checked={noSmoking}
          label={<Label>{t('smoke_text3')}</Label>}
          name={FIELD_SMOKE}
          onChange={() => handleSmokeRadio(t('no'))}
        />
      </FormGroup>
      {isSmoking && (
        <Styled.SelectWrapper>
          <Select
            changeHandler={setFieldValue}
            label={t('smoke_text4')}
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
          label={t('button_next')}
        />
      </Actions>
    </>
  );
};

export default withTranslation()(Smoke);
