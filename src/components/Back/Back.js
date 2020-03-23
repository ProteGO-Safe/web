import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../assets/img/icons/angle-left.svg';
import { Button } from '../Button';

import './Back.scss';

const Back = ({ onClick }) => (
  <div className="back-btn">
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

Back.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Back;
