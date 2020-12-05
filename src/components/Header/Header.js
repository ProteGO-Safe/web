import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Arrow, ArrowButton, Container, Logo } from './Header.styled';
import { Bell, T } from '../index';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';
import useHandlingPhysicalBack from '../../hooks/useHandlingPhysicalBack';

const Header = ({ hideBackButton, hideBell, onBackClick }) => {
  const { goBack, goTo, route } = useNavigation();
  const [activeBell, setActiveBell] = useState(false);

  useEffect(() => {
    setActiveBell(route === Routes.HistoryNotifications);
  }, [route]);

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
      {!hideBell ? <Bell active={activeBell} badge={1} handleClick={() => goTo(Routes.HistoryNotifications)} /> : null}
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
