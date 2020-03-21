import React from 'react';
import PropTypes from 'prop-types';

import './Container.scss';

const Container = ({ children, className }) => (
  <div className={`container ${className}`}>{children}</div>
);

Container.defaultProps = {
  className: ''
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Container;
