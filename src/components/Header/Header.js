import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';
import { Arrow, ArrowButton, Container, Logo } from './Header.styled';
import useNavigation from '../../hooks/useNavigation';

const Header = ({ t, hideBackButton, onBackClick }) => {
  const { goBack, goHome } = useNavigation();
  const handleBackClick = useCallback(() => {
    if (onBackClick) {
      onBackClick();
    } else {
      goBack();
    }
    // eslint-disable-next-line
  }, [onBackClick]);

  const renderBackButton = () => (
    <ArrowButton onClick={handleBackClick}>
      <Arrow />
      {t('button_back')}
    </ArrowButton>
  );

  return (
    <Container hideBackButton={hideBackButton}>
      {!hideBackButton ? renderBackButton() : null}
      <Logo onClick={() => goHome()} />
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

export default withTranslation()(Header);
