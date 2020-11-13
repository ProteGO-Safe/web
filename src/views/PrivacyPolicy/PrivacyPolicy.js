import React from 'react';
import { withTranslation } from 'react-i18next';

import { Button, FieldSet, Layout } from '../../components';
import { Content, Title } from './PrivacyPolicy.styled';
import { Paragraph } from '../../theme/typography';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';

const PrivacyPolicy = ({ t }) => {
  const { goTo } = useNavigation();
  return (
    <Layout isNavigation>
      <Content>
        <Title>{t('privacy_policy_text1')}</Title>
        <Paragraph>{t('privacy_policy_text2')}</Paragraph>
        <Paragraph>{t('privacy_policy_text3')}</Paragraph>
        <Paragraph>{t('privacy_policy_text4')}</Paragraph>
      </Content>
      <FieldSet>
        <Button
          onClick={() => goTo(Routes.Regulations)}
          label={t('privacy_policy_text5')}
        />
        <Button
          onClick={() => goTo(Routes.PrivacyPolicyDetails)}
          label={t('privacy_policy_text6')}
        />
        <Button
          onClick={() => goTo(Routes.UserData)}
          type="outline"
          label={t('privacy_policy_text7')}
        />
      </FieldSet>
    </Layout>
  );
};

export default withTranslation()(PrivacyPolicy);
