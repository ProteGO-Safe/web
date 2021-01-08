import React from 'react';
import { FormGroup } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { Title, Actions, Paragraph } from './Age.styled';
import { Button, Layout, Radio, T } from '../../../../../../components';

import { IS_NOT_ELDERLY, IS_ELDERLY, NO_DATA } from './age.constants';
import { DIAGNOSIS_FORM_FIELDS } from '../../../../diagnosis.constants';

const Age = ({ onBack, onNext }) => {
  const { setFieldValue, values } = useFormikContext();

  const onChange = value => {
    setFieldValue(DIAGNOSIS_FORM_FIELDS.AGE, value);
  };

  return (
    <Layout id="view-diagnosis-age" onBackClick={onBack} hideBell>
      <Title>
        <T i18nKey="age_text1" />
      </Title>
      <FormGroup>
        <Radio
          checked={values[DIAGNOSIS_FORM_FIELDS.AGE] === IS_NOT_ELDERLY}
          label={<T i18nKey="age_text2" />}
          name="age"
          onChange={() => onChange(IS_NOT_ELDERLY)}
          testId="is-not-elderly"
        />
        <Radio
          checked={values[DIAGNOSIS_FORM_FIELDS.AGE] === IS_ELDERLY}
          label={<T i18nKey="age_text3" />}
          name="age"
          onChange={() => onChange(IS_ELDERLY)}
          testId="is-elderly"
        />
        <Radio
          checked={values[DIAGNOSIS_FORM_FIELDS.AGE] === NO_DATA}
          label={<T i18nKey="age_text4" />}
          name="age"
          onChange={() => onChange(NO_DATA)}
          testId="no-data"
        />
      </FormGroup>
      <Paragraph>
        <T i18nKey="age_text5" />
      </Paragraph>
      <Actions>
        <Button
          disabled={values[DIAGNOSIS_FORM_FIELDS.AGE] === undefined}
          onClick={() => onNext()}
          label={<T i18nKey="button_next" />}
        />
      </Actions>
    </Layout>
  );
};

export default Age;
