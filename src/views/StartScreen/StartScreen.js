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
        <Message>
          Aplikacja do przeciwdziałania rozprzestrze­niania się COVID-19
        </Message>
        <Button onClick={handleStartClick}>Zacznij</Button>
      </Content>
      <Footer />
    </Container>
  );
};

StartScreen.propTypes = {
  onStartClick: PropTypes.func.isRequired
};

export default StartScreen;
