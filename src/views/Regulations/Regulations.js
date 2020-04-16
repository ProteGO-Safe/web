import React from 'react';

import { RegulationsContent } from './component/RegulationsContent';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Container, Content, View } from '../../theme/grid';
import { Title } from '../../theme/typography';

const Regulations = () => {
  return (
    <View>
      <Header />
      <Content>
        <Container>
          <Title>Regulamin</Title>
          <RegulationsContent />
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default Regulations;
