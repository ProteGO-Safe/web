import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../assets/img/icons/angle-left-white.svg';

import './Back.scss';

const Back = ({ onClick }) => (
  <button className="back-btn" onClick={onClick} type="button">
    <img src={Icon} alt="Wstecz" />
  </button>
);

Back.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Back;
