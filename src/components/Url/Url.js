import React from 'react';
import PropTypes from 'prop-types';

import { Link } from './Url.styled';

const Url = ({ children, value = children, underlineOff }) => {
  return (
    <Link href={value} target="_blank" underlineOff={underlineOff}>
      {children}
    </Link>
  );
};

Url.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string
};

export default Url;
