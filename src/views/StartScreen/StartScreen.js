import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';
import {
  Container,
  Logo,
  LogoWrapper,
  Message,
  Content,
  Footer,
  Button
} from './StartScreen.styled';

const StartScreen = ({ onStartClick = Function.prototype, t }) => {
  const handleStartClick = useCallback(onStartClick, []);

  return (
    <Container>
      <Content>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <Message>{t('start_screen_title')}</Message>
        <Button onClick={handleStartClick}>{t('start_screen_button')}</Button>
      </Content>
      <Footer />
    </Container>
  );
};

StartScreen.propTypes = {
  onStartClick: PropTypes.func.isRequired
};

export default withTranslation()(StartScreen);
