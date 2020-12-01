import React from 'react';

import { Button, FieldSet, Layout, T } from '../../components';
import { Content, Title } from './PrivacyPolicy.styled';
import { Paragraph } from '../../theme/typography';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';

const PrivacyPolicy = () => {
  const { goTo } = useNavigation();
  return (
    <Layout isNavigation>
      <Content>
        <Title>
          <T i18nKey="privacy_policy_text1" />
        </Title>
        <Paragraph>
          <T i18nKey="privacy_policy_text2" />
        </Paragraph>
        <Paragraph>
          <T i18nKey="privacy_policy_text3" />
        </Paragraph>
        <Paragraph>
          <T i18nKey="privacy_policy_text4" />
        </Paragraph>
      </Content>
      <FieldSet>
        <Button onClick={() => goTo(Routes.Regulations)} label={<T i18nKey="privacy_policy_text5" />} />
        <Button onClick={() => goTo(Routes.PrivacyPolicyDetails)} label={<T i18nKey="privacy_policy_text6" />} />
        <Button onClick={() => goTo(Routes.UserData)} type="outline" label={<T i18nKey="privacy_policy_text7" />} />
      </FieldSet>
    </Layout>
  );
};

export default PrivacyPolicy;
