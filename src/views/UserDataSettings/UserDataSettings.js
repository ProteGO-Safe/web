import React from 'react';
import { Button } from '../../components';
import { ModalContent } from './components';
import useModalContext from '../../hooks/useModalContext';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Actions } from '../../components/ImprintFiller/ImprintFiller.styled';
import { Container, Content, View } from '../../theme/grid';
import { Paragraph, Title } from '../../theme/typography';
import { Box, BoxTitle } from './userDataSettings.styled';
import warning from '../../assets/img/icons/warning.svg';

const UserDataSettings = () => {
  const { openModal } = useModalContext();
  const handleClick = () => openModal(<ModalContent />, 'dialog');

  return (
    <View>
      <Header />
      <Content>
        <Container>
          <Title>Zarządzaj danymi</Title>
          <Box>
            <BoxTitle>
              <img src={warning} alt="Ważne" />
              Ważne
            </BoxTitle>
            <Paragraph>
              Jeśli wymażesz swoje dane, aplikacja stanie się bezużyteczna.
              Archiwum Twojego Dziennika Zdrowia przepadnie, a wszelkie dane
              będzie trzeba podawać ponownie.
            </Paragraph>
          </Box>
          <Actions>
            <Button onClick={handleClick} label="Wymaż dane" type="outline" />
          </Actions>
        </Container>
      </Content>
      <BottomNavigation />
    </View>
  );
};

export default UserDataSettings;
