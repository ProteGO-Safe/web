import React from 'react';
import { withTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import { FormGroup } from '@material-ui/core';
import { FIELD_TERM1 } from '../../../../constants';

import useModalContext from '../../../../hooks/useModalContext';

import { Annotation, TextLink } from '../../../../theme/typography';
import Header from '../../../../components/Header/Header';
import PrivacyPolicyContent from '../../../PrivacyPolicyDetails/component/PrivacyPolicyContent/PrivacyPolicyContent';
import RegulationsContent from '../../../Regulations/component/RegulationsContent/RegulationsContent';
import { Button, Checkbox, GovFooter } from '../../../../components';
import { Container, Content, View } from '../../../../theme/grid';
import { ButtonWrapper, Title, Paragraph } from '../../Registration.styled';

const Terms = ({ t, handleClick }) => {
  const { setFieldValue, values } = useFormikContext();
  const { openModal } = useModalContext();

  const disabled = (() => {
    return !values[FIELD_TERM1];
  })();

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <Title>
            {t('terms_text1')}
            <br />
            {t('terms_text2')}
          </Title>

          <Paragraph>{t('terms_text3')}</Paragraph>
          <Paragraph>{t('terms_text4')}</Paragraph>
          <FormGroup>
            <Checkbox
              checked={values[FIELD_TERM1]}
              label={
                <Annotation>
                  {t('terms_text5')}{' '}
                  <TextLink
                    onClick={e => {
                      e.preventDefault();
                      openModal(<RegulationsContent />);
                    }}
                    role="button"
                  >
                    {t('terms_text6')}
                  </TextLink>{' '}
                  {t('terms_text8')}{' '}
                  <TextLink
                    onClick={e => {
                      e.preventDefault();
                      openModal(<PrivacyPolicyContent />);
                    }}
                    role="button"
                  >
                    {t('terms_text7')}
                  </TextLink>{' '}
                  {t('terms_text9')}
                </Annotation>
              }
              name={FIELD_TERM1}
              onChange={() => setFieldValue(FIELD_TERM1, !values[FIELD_TERM1])}
            />
          </FormGroup>

          <ButtonWrapper>
            <Button disabled={disabled} onClick={handleClick} label={t('button_next')} />
          </ButtonWrapper>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default withTranslation()(Terms);
