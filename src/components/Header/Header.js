import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Arrow, ArrowButton, Container, Logo } from './Header.styled';
import { Bell, T } from '../index';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';
import useHandlingPhysicalBack from '../../hooks/useHandlingPhysicalBack';
import { H5 } from '../../theme/typography';
import { Color } from '../../theme/colors';

const Header = ({ hideBackButton, hideBell, logoText, onBackClick }) => {
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
      {!logoText && <Logo onClick={() => goTo(Routes.Home)} />}
      {logoText && <H5 color={Color.white}>{logoText}</H5>}
      {!hideBell ? <Bell /> : null}
    </Container>
  );
};

Header.defaultProps = {
  hideBackButton: false,
  hideBell: false,
  logoText: undefined,
  onBackClick: null
};

Header.propTypes = {
  hideBackButton: PropTypes.bool,
  hideBell: PropTypes.bool,
  logoText: PropTypes.string,
  onBackClick: PropTypes.func
};

export default Header;
