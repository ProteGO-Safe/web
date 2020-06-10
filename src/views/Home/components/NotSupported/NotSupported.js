import React from 'react';

import { Button, GovFooter } from '../../../../components';
import Header from '../../../../components/Header/Header';
import Url from '../../../../components/Url';
import { Logo, Title, Paragraph } from './NotSupported.styled';
import { Container, Content, View } from '../../../../theme/grid';

const NotSupported = () => {
  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <Logo />
          <Title>Wymagana aktualizacja</Title>
          <Paragraph>
            Nowa wersja aplikacji pozwala lepiej chronić się przed
            Koronawirusem. od 09.06.2020 wspierana jest tylko nowa wersja
            aplikacji 4.1 dalsze korzystanie z aplikacji wymaga aktualizację do
            nowej wersji po aktualizacji dotychczasowy dziennik zdrowia i
            wypełnione testy zostaną usunięte. Nie przejmuj się - wypełniaj je
            dalej w nowej, finalnej wersji aplikacji.
          </Paragraph>

          <Url
            value="https://play.google.com/store/apps/details?id=pl.gov.mc.protegosafe"
            underlineOff
          >
            <Button onClick={() => null} text="AKTUALIZUJ" type="primary" />
          </Url>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default NotSupported;
