import React from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Button, FieldSet, Layout } from '../../components';
import Routes from '../../routes';
import { Content, Title } from './PrivacyPolicy.styled';
import { Paragraph } from '../../theme/typography';

const PrivacyPolicy = ({ t }) => {
  const history = useHistory();

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
          onClick={() => history.push(Routes.Regulations)}
          label={t('privacy_policy_text5')}
        />
        <Button
          onClick={() => history.push(Routes.PrivacyPolicyDetails)}
          label={t('privacy_policy_text6')}
        />
        <Button
          onClick={() => history.push(Routes.UserData)}
          type="outline"
          label={t('privacy_policy_text7')}
        />
      </FieldSet>
    </Layout>
  );
};

export default withTranslation()(PrivacyPolicy);
