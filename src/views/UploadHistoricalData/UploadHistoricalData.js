import React from 'react';
import { useSelector } from 'react-redux';
import PinInput from 'react-pin-input';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Button, InfoIcon } from '../../components';
import PhoneNumber from '../../components/PhoneNumber';
import { Container, Content, View } from '../../theme/grid';
import { Paragraph, Small } from '../../theme/typography';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';
import {
  Name,
  PinWrapper,
  ButtonWrapper,
  SuccessInfo
} from './UploadHistoricalData.styled';

import InformationIcon from '../../assets/img/icons/bad.svg';
import WarningIcon from '../../assets/img/icons/warning.svg';
import SuccessIcon from '../../assets/img/icons/ok.svg';

const UploadHistoricalData = () => {
  const userName = useSelector(state => state.user.name);

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <Name>{userName},</Name>
          <Paragraph>
            aby potwierdzić Operatorowi Centrum Kontaktu swój stan zdrowia wpisz
            poniżej KOD PIN który otrzymałeś od niego w wiadomości SMS
          </Paragraph>
          <PinWrapper>
            <PinInput
              focus
              length={6}
              type="text"
              onChange={null}
              inputStyle={{ borderColor: Color.lightGray }}
            />
          </PinWrapper>
          <InfoIcon icon={WarningIcon}>
            <Paragraph color={Color.danger}>
              KOD PIN jest wprowadzony niepoprawnie lub wygasł. Sprawdź
              poprawność KODU PIN i spróbuj ponownie.
            </Paragraph>
          </InfoIcon>
          <InfoIcon icon={SuccessIcon}>
            <Paragraph color={Color.green}>Kod zweryfikowany</Paragraph>
          </InfoIcon>
          <SuccessInfo>
            <Paragraph fontWeight={FontWeight.Bold}>
              Twój PIN jest poprawny, kliknij poniżej, aby dokończyć
              przekazywanie danych.
            </Paragraph>
            <Small>
              To szczególnie waży krok - pomoże ochronić Ciebie i innych, z
              którymi miałeś kontakt. Nie przekazujemy żadnych informacji, które
              pozwolić Cię zidentyfikować - jesteś bezpieczny.
            </Small>
          </SuccessInfo>
          <ButtonWrapper>
            <Button onClick={null} text="Potwierdź kod pin" />
          </ButtonWrapper>
          <InfoIcon icon={InformationIcon}>
            <Paragraph>
              <strong>Potrzebna pomoc?</strong>
              <br /> Skontaktuj się z Centrum Pomocy:{' '}
              <PhoneNumber value="800123123">800 123 123</PhoneNumber>
            </Paragraph>
          </InfoIcon>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default UploadHistoricalData;
