import React from 'react';
import { withTranslation } from 'react-i18next';
import { Button, Layout, Url } from '../../components';
import { Logo, Title, Paragraph } from './NotSupported.styled';

const NotSupported = ({ t, url }) => {
  return (
    <Layout hideBackButton isGovFooter>
      <Logo />
      <Title>{t('not_supported_text1')}</Title>
      <Paragraph>
        {t('not_supported_text2')}
        <br />
        {t('not_supported_text3')}
      </Paragraph>

      <Url value={url} underlineOff>
        <Button
          onClick={() => null}
          text={t('not_supported_text4')}
          type="primary"
        />
      </Url>
    </Layout>
  );
};

export default withTranslation()(NotSupported);
