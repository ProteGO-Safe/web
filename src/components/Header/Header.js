import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Arrow, ArrowButton, Container, Logo } from './Header.styled';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';
import useHandlingPhysicalBack from '../../hooks/useHandlingPhysicalBack';
import { T } from '../index';

const Header = ({ hideBackButton, onBackClick }) => {
  const { goBack, goTo } = useNavigation();

  const handleBackClick = useCallback(() => {
    if (hideBackButton) {
      return;
    }
    if (onBackClick) {
      onBackClick();
    } else {
      goBack();
    }
    // eslint-disable-next-line
  }, [onBackClick, hideBackButton]);

  useHandlingPhysicalBack(handleBackClick);

  const renderBackButton = () => (
    <ArrowButton onClick={handleBackClick}>
      <Arrow />
      <T i18nKey="button_back" />
    </ArrowButton>
  );

  return (
    <Container hideBackButton={hideBackButton}>
      {!hideBackButton ? renderBackButton() : null}
      <Logo onClick={() => goTo(Routes.Home)} />
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
