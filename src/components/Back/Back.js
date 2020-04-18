import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../assets/img/icons/angle-left.svg';
import { Button } from '../Button';

import './Back.scss';

const Back = ({ className, onClick }) => (
  <div className={`back-btn ${className}`}>
    <Button
      height="small"
      icon={Icon}
      iconLeft
      onClick={onClick}
      size="small"
      text="Cofnij"
      type="white"
    />
  </div>
);

Back.defaultProps = {
  className: ''
};

Back.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Back;
