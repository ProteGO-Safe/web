// DEPRECATED
import React from 'react';
import PropTypes from 'prop-types';

import { Header as HeaderBase } from '../../../components/Header';

const Header = ({ prevUrl }) => {
  return <HeaderBase hideBackButton={!prevUrl} />;
};

Header.defaultProps = {
  prevUrl: ''
};

Header.propTypes = {
  prevUrl: PropTypes.string
};

export default Header;
