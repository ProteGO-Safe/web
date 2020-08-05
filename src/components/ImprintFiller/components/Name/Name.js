import React from 'react';
import { useFormikContext } from 'formik';
import { Button, TextField } from '../../..';
import { FIELD_NAME } from '../../../../constants';

import { Actions } from '../../ImprintFiller.styled';
import './Name.scss';
import { withTranslation } from 'react-i18next';

const Name = ({ t, handleClick }) => {
  const { errors, handleChange, values } = useFormikContext();

  const disabled = (() => {
    return !values[FIELD_NAME];
  })();

  return (
    <>
      <TextField
        error={errors[FIELD_NAME]}
        label={t('name_form_text1')}
        placeholder={t('name_form_text3')}
        onChange={handleChange}
        name={FIELD_NAME}
        value={values[FIELD_NAME]}
        info={t('name_form_text4')}
      />

      <Actions>
        <Button disabled={disabled} onClick={handleClick} label={t('button_next')} />
      </Actions>
    </>
  );
};

export default withTranslation()(Name);
