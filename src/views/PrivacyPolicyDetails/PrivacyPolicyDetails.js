import React from 'react';
import { withTranslation } from 'react-i18next';
import { PrivacyPolicyContent } from './component/PrivacyPolicyContent';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Content, Container, View } from '../../theme/grid';
import { Title } from './PrivacyPolicyDetails.styled';

const PrivacyPolicyDetails = ({ t }) => {
  return (
    <View>
      <Header />
      <Content>
        <Container>
          <Title>{t('privacy_policy_details_text1')}</Title>
          <PrivacyPolicyContent />
        </Container>
      </Content>
      <BottomNavigation />
    </View>
  );
};

export default withTranslation()(PrivacyPolicyDetails);
