import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ children, size }) => (
  <div className={`banner ${size}`}>{children}</div>
);

Banner.defaultProps = {
  children: null,
  size: 'medium'
};

Banner.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'big'])
};

export default Banner;
