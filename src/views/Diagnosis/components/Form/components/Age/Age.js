import React from 'react';
import { withTranslation } from 'react-i18next';
import { FormGroup } from '@material-ui/core';
import { useFormikContext } from 'formik';
import {
  Title,
  Actions
} from '../../../../../../components/ImprintFiller/ImprintFiller.styled';
import { Button, Layout, Radio } from '../../../../../../components';
import { Paragraph } from './Age.styled';
import { IS_NOT_ELDERLY, IS_ELDERLY, NO_DATA } from './age.constants';
import { DIAGNOSIS_FORM_FIELDS } from '../../../../diagnosis.constants';

const Age = ({ t, onBack, onNext }) => {
  const { setFieldValue, values } = useFormikContext();

  const onChange = value => {
    setFieldValue(DIAGNOSIS_FORM_FIELDS.AGE, value);
  };

  return (
    <Layout onBackClick={onBack}>
      <Title>{t('age_text1')}</Title>
      <FormGroup>
        <Radio
          checked={values[DIAGNOSIS_FORM_FIELDS.AGE] === IS_NOT_ELDERLY}
          label={t('age_text2')}
          name="age"
          onChange={() => onChange(IS_NOT_ELDERLY)}
        />
        <Radio
          checked={values[DIAGNOSIS_FORM_FIELDS.AGE] === IS_ELDERLY}
          label={t('age_text3')}
          name="age"
          onChange={() => onChange(IS_ELDERLY)}
        />
        <Radio
          checked={values[DIAGNOSIS_FORM_FIELDS.AGE] === NO_DATA}
          label={t('age_text4')}
          name="age"
          onChange={() => onChange(NO_DATA)}
        />
      </FormGroup>
      <Paragraph>
        <strong>{t('age_text5')}</strong>
        <br />
        {t('age_text6')}
      </Paragraph>
      <Actions>
        <Button
          disabled={values[DIAGNOSIS_FORM_FIELDS.AGE] === undefined}
          onClick={() => onNext()}
          label={t('button_next')}
        />
      </Actions>
    </Layout>
  );
};

export default withTranslation()(Age);
