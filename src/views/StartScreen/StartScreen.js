import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Logo,
  Message,
  Content,
  Footer,
  Button
} from './StartScreen.styled';

const StartScreen = ({ onStartClick = Function.prototype }) => {
  const handleStartClick = useCallback(onStartClick, []);

  return (
    <Container>
      <Content>
        <Logo />
        <Message>Pokonajmy razem koronawirusa!</Message>
        <Button onClick={handleStartClick}>Rozpocznij</Button>
      </Content>
      <Footer />
    </Container>
  );
};

StartScreen.propTypes = {
  onStartClick: PropTypes.func.isRequired
};

export default StartScreen;
