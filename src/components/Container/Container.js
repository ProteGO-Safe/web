import React from 'react';
import PropTypes from 'prop-types';

import './Container.scss';

const Container = ({ background, children, className }) => (
  <div
    className={`container ${className}`}
    style={{ backgroundImage: `url(${background})` }}
  >
    {children}
  </div>
);

Container.defaultProps = {
  className: '',
  background: ''
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  background: PropTypes.string
};

export default Container;
