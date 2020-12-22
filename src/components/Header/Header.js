import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Arrow, ArrowButton, Container, Logo } from './Header.styled';
import { Bell, T } from '../index';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';
import useHandlingPhysicalBack from '../../hooks/useHandlingPhysicalBack';

const Header = ({ hideBackButton, hideBell, onBackClick }) => {
  const { goBack, goTo } = useNavigation();

  const handleBackClick = useCallback(() => {
    if (onBackClick) {
      onBackClick();
    } else {
      goBack();
    }
    // eslint-disable-next-line
  }, [onBackClick, hideBackButton]);

  const backButton = useMemo(
    () => (
      <ArrowButton onClick={handleBackClick}>
        <Arrow />
        <T i18nKey="button_back" />
      </ArrowButton>
    ),
    [handleBackClick]
  );

  useHandlingPhysicalBack(handleBackClick);

  return (
    <Container hideBackButton={hideBackButton}>
      {!hideBackButton ? backButton : null}
      <Logo onClick={() => goTo(Routes.Home)} />
      {!hideBell ? <Bell /> : null}
    </Container>
  );
};

Header.defaultProps = {
  hideBackButton: false,
  hideBell: false,
  onBackClick: null
};

Header.propTypes = {
  hideBackButton: PropTypes.bool,
  hideBell: PropTypes.bool,
  onBackClick: PropTypes.func
};

export default Header;
