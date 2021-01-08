import React from 'react';
import { Button, Layout, Url, T } from '../../components';
import { Logo, Title, Paragraph } from './NotSupported.styled';

const NotSupported = ({ url }) => {
  return (
    <Layout hideBackButton isGovFooter hideBell>
      <Logo />
      <Title>
        <T i18nKey="not_supported_text1" />
      </Title>
      <Paragraph>
        <T i18nKey="not_supported_text2" />
        <br />
        <T i18nKey="not_supported_text3" />
      </Paragraph>

      <Url value={url} underlineOff>
        <Button onClick={() => null} text={<T i18nKey="not_supported_text4" />} type="primary" />
      </Url>
    </Layout>
  );
};

export default NotSupported;
