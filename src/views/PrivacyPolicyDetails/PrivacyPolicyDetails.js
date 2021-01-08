import React from 'react';
import { PrivacyPolicyContent } from './component/PrivacyPolicyContent';
import { Layout, T } from '../../components';
import { Title } from './PrivacyPolicyDetails.styled';

const PrivacyPolicyDetails = () => {
  return (
    <Layout isNavigation>
      <Title>
        <T i18nKey="privacy_policy_details_text1" />
      </Title>
      <PrivacyPolicyContent />
    </Layout>
  );
};

export default PrivacyPolicyDetails;
