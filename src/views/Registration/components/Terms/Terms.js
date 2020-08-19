import React from 'react';
import { useFormikContext } from 'formik';
import { FormGroup } from '@material-ui/core';
import { FIELD_TERM1 } from '../../../../constants';

import useModalContext from '../../../../hooks/useModalContext';

import { Annotation, TextLink } from '../../../../theme/typography';
import Header from '../../../../components/Header/Header';
import PrivacyPolicyContent from '../../../PrivacyPolicyDetails/component/PrivacyPolicyContent/PrivacyPolicyContent';
import RegulationsContent from '../../../Regulations/component/RegulationsContent/RegulationsContent';
import { Button, Checkbox, Email, GovFooter } from '../../../../components';
import { Container, Content, View } from '../../../../theme/grid';
import {
  ButtonWrapper,
  Title,
  Paragraph,
  Small
} from '../../Registration.styled';

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

          <Small>
            Administratorem danych jest Główny Inspektor Sanitarny (GIS), adres
            do kontaktu: <Email>iod@gis.gov.pl</Email>. Celem aplikacji jest
            wsparcie w&nbsp;przeciwdziałaniu rozprzestrzeniania się pandemii
            COVID-19, wsparcie szybkiej wymiany informacji oraz oceny ryzyka
            zarażenia. Masz prawo dostępu do swoich danych, ich poprawiania,
            usunięcia, ograniczenia przetwarzania, sprzeciwu wobec przetwarzania
            oraz wniesienia skargi do organu nadzorczego. Więcej informacji w{' '}
            <TextLink
              onClick={e => {
                e.preventDefault();
                openModal(<PrivacyPolicyContent />);
              }}
              role="button"
            >
              Polityce Prywatności
            </TextLink>
            .
          </Small>

          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default Terms;
