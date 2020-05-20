import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Routes from '../../routes';
import { Arrow, ArrowButton, Container, Logo } from './Header.styled';

const Header = ({ hideBackButton, onBackClick }) => {
  const history = useHistory();

  const handleBackClick = useCallback(() => {
    if (onBackClick) {
      onBackClick();
    } else if (history.length > 2) {
      history.goBack();
    } else {
      history.push(Routes.Home);
    }
  }, [onBackClick, history]);

  const renderBackButton = () => (
    <ArrowButton onClick={handleBackClick}>
      <Arrow />
      Powrót
    </ArrowButton>
  );

  return (
    <Container hideBackButton={hideBackButton}>
      {!hideBackButton ? renderBackButton() : null}
      <Logo />
    </Container>
  );
};

Header.defaultProps = {
  hideBackButton: false,
  onBackClick: null
};

Header.propTypes = {
  hideBackButton: PropTypes.bool,
  onBackClick: PropTypes.func
};

export default Header;
