import React from 'react';

import { Button, GovFooter, Url } from '../../components';
import Header from '../../components/Header/Header';
import { Logo, Title, Paragraph } from './NotSupported.styled';
import { Container, Content, View } from '../../theme/grid';

const NotSupported = ({ url }) => {
  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <Logo />
          <Title>Wymagana aktualizacja</Title>
          <Paragraph>
            Dostępna jest nowa wersja aplikacji.
            <br />
            Zaktualizuj aplikację ProteGO Safe, aby korzystać z pełni
            funkcjonalności.
          </Paragraph>

          <Url value={url} underlineOff>
            <Button onClick={() => null} text="AKTUALIZUJ" type="primary" />
          </Url>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default NotSupported;
