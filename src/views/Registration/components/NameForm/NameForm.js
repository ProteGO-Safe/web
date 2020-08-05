import React from 'react';
import { withTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import { Container, View } from '../../../../theme/grid';
import { Header } from '../../../../components/Header';
import { GovFooter } from '../../../../components/GovFooter';
import { TextField } from '../../../../components/TextField';
import { FIELD_NAME } from '../../../../constants';
import { Button } from '../../../../components';
import { ButtonWrapper, Label } from '../../Registration.styled';

const NameForm = ({ t }) => {
  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    setFieldValue
  } = useFormikContext();

  const disabled = (() => {
    return !values[FIELD_NAME];
  })();

  const onSkip = () => {
    setFieldValue(FIELD_NAME, t('name_form_text2'));
    handleSubmit();
  };

  return (
    <View>
      <Header hideBackButton />
      <Container>
        <Label>{t('name_form_text1')}</Label>
        <TextField
          error={t(errors[FIELD_NAME])}
          placeholder={t('name_form_text3')}
          onChange={handleChange}
          name={FIELD_NAME}
          value={values[FIELD_NAME]}
          info={t('name_form_text4')}
        />

        <ButtonWrapper>
          <Button
            disabled={disabled}
            onClick={handleSubmit}
            label={t('name_form_text5')}
          />
          <Button onClick={onSkip} type="outline" label={t('name_form_text6')} />
        </ButtonWrapper>
        <GovFooter type="black" />
      </Container>
    </View>
  );
};

export default withTranslation()(NameForm);
