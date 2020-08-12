import React from 'react';
import { withTranslation } from 'react-i18next';
import { PrivacyPolicyContent } from './component/PrivacyPolicyContent';
import { Layout } from '../../components';
import { Title } from './PrivacyPolicyDetails.styled';

const PrivacyPolicyDetails = ({ t }) => {
  return (
    <Layout isNavigation>
      <Title>{t('privacy_policy_details_text1')}</Title>
      <PrivacyPolicyContent />
    </Layout>
  );
};

export default withTranslation()(PrivacyPolicyDetails);
