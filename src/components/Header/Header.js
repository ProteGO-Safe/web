import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import useMenuContext from '../../hooks/useMenuContext';
import Routes from '../../routes';
import {
  Arrow,
  ArrowButton,
  Burger,
  Container,
  Logo,
  MenuButton
} from './Header.styled';

const Header = ({ hideBackButton, hideMenuButton, onBackClick }) => {
  const history = useHistory();
  const { visible, setVisible, startHiding } = useMenuContext();

  const handleMenuClick = useCallback(() => {
    if (visible) {
      return startHiding();
    }

    return setVisible(true);
  }, [visible, startHiding, setVisible]);

  const handleBackClick = useCallback(() => {
    if (onBackClick) {
      onBackClick();
    } else if (history.length > 2) {
      history.goBack();
    } else {
      history.push(Routes.Home);
    }
  }, [onBackClick, history]);

  const renderMenuButton = () => (
    <MenuButton onClick={handleMenuClick}>
      <Burger />
    </MenuButton>
  );

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
      {!hideMenuButton ? renderMenuButton() : null}
    </Container>
  );
};

Header.defaultProps = {
  hideBackButton: false,
  hideMenuButton: false,
  onBackClick: null
};

Header.propTypes = {
  hideBackButton: PropTypes.bool,
  hideMenuButton: PropTypes.bool,
  onBackClick: PropTypes.func
};

export default Header;
