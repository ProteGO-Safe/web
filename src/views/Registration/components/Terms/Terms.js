import React from 'react';
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

const Terms = ({ handleClick }) => {
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
            Pomóż sobie i innym. <br /> Zaczynamy!
          </Title>

          <Paragraph>
            Dobrze, że zdecydowałeś/aś się zainstalować aplikację ProteGO Safe.
          </Paragraph>
          <Paragraph>
            Dzięki niej dowiesz się, czy istnieje ryzyko, że przebywałeś/aś w
            pobliżu osób chorych na COVID-19.
          </Paragraph>
          <Paragraph>
            W następnych krokach będziesz mógł opcjonalnie podać nick
            wykorzystywany w aplikacji oraz wykononać opcjonalny test oceny
            ryzyka. Zaakceptuj poniższą zgodę, aby kontynuować:
          </Paragraph>
          <FormGroup>
            <Checkbox
              checked={values[FIELD_TERM1]}
              label={
                <Annotation>
                  Oświadczam, że zapoznałem/am się z{' '}
                  <TextLink
                    onClick={e => {
                      e.preventDefault();
                      openModal(<RegulationsContent />);
                    }}
                    role="button"
                  >
                    Regulaminem
                  </TextLink>{' '}
                  ProteGO Safe oraz{' '}
                  <TextLink
                    onClick={e => {
                      e.preventDefault();
                      openModal(<PrivacyPolicyContent />);
                    }}
                    role="button"
                  >
                    Polityką Prywatności
                  </TextLink>{' '}
                  i akceptuję ich postanowienia.
                </Annotation>
              }
              name={FIELD_TERM1}
              onChange={() => setFieldValue(FIELD_TERM1, !values[FIELD_TERM1])}
            />
          </FormGroup>

          <ButtonWrapper>
            <Button disabled={disabled} onClick={handleClick} text="Dalej" />
          </ButtonWrapper>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default Terms;
