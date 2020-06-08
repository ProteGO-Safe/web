import React from 'react';
import PropTypes from 'prop-types';

import { Link } from './Email.styled';

const Email = ({ children }) => {
  return <Link href={`mailto:${children}`}>{children}</Link>;
};

Email.propTypes = {
  children: PropTypes.string.isRequired
};

export default Email;
