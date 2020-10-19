import React from 'react';
import { withTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import { Button, InputWithCounter } from '../../..';

import { FIELD_NAME } from '../../../../constants';
import { Actions } from '../../ImprintFiller.styled';
import './Name.scss';

const Name = ({ t, handleNext, handleSkip }) => {
  const { errors, handleChange, values } = useFormikContext();

  const disabled = (() => {
    return !values[FIELD_NAME];
  })();

  return (
    <>
      <InputWithCounter
        min={1}
        max={12}
        error={t(errors[FIELD_NAME])}
        label={t('name_form_text1')}
        placeholder={t('name_form_text11')}
        onChange={handleChange}
        name={FIELD_NAME}
        value={t(values[FIELD_NAME])}
        info={t('name_form_text4')}
      />

      <Actions>
        <Button
          disabled={disabled}
          onClick={handleNext}
          label={t('button_next')}
        />
        <Button
          onClick={handleSkip}
          type="outline"
          label={t('name_form_text6')}
        />
      </Actions>
    </>
  );
};

export default withTranslation()(Name);
