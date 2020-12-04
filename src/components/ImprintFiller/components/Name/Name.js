import React from 'react';
import { useFormikContext } from 'formik';
import { withTranslation } from 'react-i18next';
import { Button, InputWithCounter, T } from '../../..';
import { FIELD_NAME } from '../../../../constants';
import { Actions } from '../../ImprintFiller.styled';
import './Name.scss';

const Name = ({ handleNext, handleSkip, t }) => {
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
        label={<T i18nKey="name_form_text1" />}
        placeholder={t('name_form_text11')}
        onChange={handleChange}
        name={FIELD_NAME}
        value={values[FIELD_NAME]}
        info={<T i18nKey="name_form_text4" />}
      />

      <Actions>
        <Button disabled={disabled} onClick={handleNext} label={<T i18nKey="button_next" />} />
        <Button onClick={handleSkip} type="outline" label={<T i18nKey="name_form_text6" />} />
      </Actions>
    </>
  );
};

export default withTranslation()(Name);
