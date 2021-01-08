import React from 'react';
import { withTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import { FIELD_NAME } from '../../../../constants';
import { Button, InputWithCounter, T } from '../../../../components';
import { ButtonWrapper, Label } from '../../Registration.styled';

const NameForm = ({ t }) => {
  const { errors, values, handleChange, handleSubmit, setFieldValue } = useFormikContext();

  const disabled = (() => {
    return !values[FIELD_NAME];
  })();

  const onSkip = () => {
    setFieldValue(FIELD_NAME, null);
    handleSubmit();
  };

  return (
    <>
      <Label>
        <T i18nKey="name_form_text1" />
      </Label>

      <InputWithCounter
        min={1}
        max={12}
        error={t(errors[FIELD_NAME])}
        label={t('name_form_text3')}
        placeholder={t('name_form_text11')}
        onChange={handleChange}
        name={FIELD_NAME}
        value={values[FIELD_NAME]}
        info={t('name_form_text4')}
      />

      <ButtonWrapper>
        <Button disabled={disabled} onClick={handleSubmit} label={<T i18nKey="name_form_text5" />} />
        <Button onClick={onSkip} type="outline" label={<T i18nKey="name_form_text6" />} />
      </ButtonWrapper>
    </>
  );
};

export default withTranslation()(NameForm);
