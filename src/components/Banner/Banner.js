import React from 'react';
import PropTypes from 'prop-types';

import './Banner.scss';

const Banner = ({ background, children, size }) => (
  <div
    className={`banner ${size}`}
    style={{ backgroundImage: `url(${background})` }}
  >
    {children}
  </div>
);

Banner.defaultProps = {
  background: '',
  children: null,
  size: 'medium'
};

Banner.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'big'])
};

export default Banner;
