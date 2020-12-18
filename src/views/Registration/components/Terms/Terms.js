import React from 'react';
import { useFormikContext } from 'formik';
import { FormGroup } from '@material-ui/core';
import { FIELD_TERM1 } from '../../../../constants';
import { Annotation } from '../../../../theme/typography';
import { Button, Checkbox, T } from '../../../../components';
import { ButtonWrapper, Paragraph, Small, Title } from '../../Registration.styled';

const Terms = ({ handleClick }) => {
  const { setFieldValue, values } = useFormikContext();

  const disabled = (() => {
    return !values[FIELD_TERM1];
  })();

  return (
    <>
      <Title>
        <T i18nKey="terms_text_1" />
      </Title>

      <Paragraph>
        <T i18nKey="terms_text_2" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="terms_text_3" />
      </Paragraph>

      <FormGroup>
        <Checkbox
          checked={values[FIELD_TERM1]}
          label={
            <Annotation>
              <T i18nKey="terms_text_4" />
            </Annotation>
          }
          name={FIELD_TERM1}
          onChange={() => setFieldValue(FIELD_TERM1, !values[FIELD_TERM1])}
        />
      </FormGroup>

      <ButtonWrapper>
        <Button disabled={disabled} onClick={handleClick} label={<T i18nKey="button_next" />} />
      </ButtonWrapper>

      <Small>
        <T i18nKey="terms_text_5" />
      </Small>
    </>
  );
};

export default Terms;
