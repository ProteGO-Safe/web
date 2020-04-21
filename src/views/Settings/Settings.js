import React from 'react';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Content, View } from '../../theme/grid';
import { Container } from './Settings.styled';

const Settings = ({ text, onBack }) => {
  return (
    <View>
      <Header onBackClick={onBack} />
      <Content>
        <Container>
          <p>{text}</p>
        </Container>
      </Content>
      <BottomNavigation />
    </View>
  );
};

export default Settings;
