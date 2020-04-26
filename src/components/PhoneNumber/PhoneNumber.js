import React from 'react';
import PropTypes from 'prop-types';

import { Link } from './PhoneNumber.styled';

const PhoneNumber = ({ children, value = children }) => {
  const number = value.replace(/[^0-9+]+/g, '');
  return <Link href={`tel:${number}`}>{children}</Link>;
};

PhoneNumber.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

export default PhoneNumber;
