import React from 'react';
import { Button, Layout, T } from '../../components';
import { Paragraph } from '../../theme/typography';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';
import * as Styled from './PrivacyPolicy.styled';

const PrivacyPolicy = () => {
  const { goTo } = useNavigation();
  return (
    <Layout isNavigation>
      <Styled.Content>
        <Styled.Title>
          <T i18nKey="privacy_policy_text1" />
        </Styled.Title>
        <Paragraph>
          <T i18nKey="privacy_policy_text2" />
        </Paragraph>
        <Paragraph>
          <T i18nKey="privacy_policy_text3" />
        </Paragraph>
        <Paragraph>
          <T i18nKey="privacy_policy_text4" />
        </Paragraph>
      </Styled.Content>

      <Styled.ButtonWrapper>
        <Button onClick={() => goTo(Routes.Regulations)} label={<T i18nKey="privacy_policy_text5" />} />
        <Button onClick={() => goTo(Routes.PrivacyPolicyDetails)} label={<T i18nKey="privacy_policy_text6" />} />
        <Button onClick={() => goTo(Routes.UserData)} type="outline" label={<T i18nKey="privacy_policy_text7" />} />
      </Styled.ButtonWrapper>
    </Layout>
  );
};

export default PrivacyPolicy;
