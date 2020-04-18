import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Back } from '../../../components/Back';
import { Brand } from '../../../components/Brand';
import { MenuButton } from '../../../components/MenuButton';
import { Banner } from '../../../components/Banner';

const Header = ({ background, prevUrl }) => {
  const history = useHistory();
  const handleBack = () => history.push(prevUrl);

  return (
    <Banner background={background}>
      {prevUrl && <Back onClick={handleBack} />}
      <Brand content={false} small white />
      <MenuButton />
    </Banner>
  );
};

Header.defaultProps = {
  prevUrl: ''
};

Header.propTypes = {
  background: PropTypes.string.isRequired,
  prevUrl: PropTypes.string
};

export default Header;
