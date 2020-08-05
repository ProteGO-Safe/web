import React from 'react';
import { withTranslation } from 'react-i18next';
import { RegulationsContent } from './component/RegulationsContent';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Container, Content, View } from '../../theme/grid';
import { Title } from './Regulations.styled';

const Regulations = ({ t }) => {
  return (
    <View>
      <Header />
      <Content>
        <Container>
          <Title>{t('regulations_text1')}</Title>
          <RegulationsContent />
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default withTranslation()(Regulations);
