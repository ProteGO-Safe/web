import React from 'react';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Content, View } from '../../theme/grid';
import { Container, Text, Title } from './Settings.styled';

const Settings = ({ onBack }) => {
  return (
    <View>
      <Header onBackClick={onBack} />
      <Content>
        <Container>
          <Title>Ustawienia</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Container>
      </Content>
      <BottomNavigation />
    </View>
  );
};

export default Settings;
