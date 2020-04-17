import React from 'react';
import { PrivacyPolicyContent } from './component/PrivacyPolicyContent';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Content, Container, View } from '../../theme/grid';
import { Title } from '../../theme/typography';

const PrivacyPolicyDetails = () => {
  return (
    <View>
      <Header />
      <Content>
        <Container>
          <Title>Polityka prywatności</Title>
          <PrivacyPolicyContent />
        </Container>
      </Content>
      <BottomNavigation />
    </View>
  );
};

export default PrivacyPolicyDetails;
