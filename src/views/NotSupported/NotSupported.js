import React from 'react';
import { withTranslation } from 'react-i18next';

import { Button, GovFooter, Url } from '../../components';
import Header from '../../components/Header/Header';
import { Logo, Title, Paragraph } from './NotSupported.styled';
import { Container, Content, View } from '../../theme/grid';

const NotSupported = ({ t, url }) => {
  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
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
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default withTranslation()(NotSupported);
