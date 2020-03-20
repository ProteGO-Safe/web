import React from 'react';
import PropTypes from 'prop-types';

import './Banner.scss';

const Banner = ({ background, children }) => (
  <div
    className="banner"
    style={{ backgroundImage: `url(${background})` }}
  >
    {children}
  </div>
);

Banner.defaultProps = {
  background: '',
  children: null
};

Banner.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node
};

export default Banner;
