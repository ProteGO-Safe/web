import React from 'react';
import PropTypes from 'prop-types';

import { Link } from './PhoneNumber.styled';

const PhoneNumber = ({ children, value = children, fullWidth }) => {
  const number = value.replace(/[^0-9+]+/g, '');
  return (
    <Link href={`tel:${number}`} fullWidth={fullWidth}>
      {children}
    </Link>
  );
};

PhoneNumber.defaultProps = {
  fullWidth: false
};

PhoneNumber.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  fullWidth: PropTypes.bool
};

export default PhoneNumber;
