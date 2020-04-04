import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import useModalContext from '../../hooks/useModalContext';
import { Help } from '../../views/Help';
import './PanicButton.scss';

const PanicButton = ({ disabled, height, icon, size, type }) => {
  const { openModal } = useModalContext();
  const handleButtonClick = useCallback(() => {
    openModal(<Help />);
  }, [openModal]);
  return (
    <button
      disabled={disabled}
      className={`button button--${type} button--${height} button--size--${size}`}
      onClick={handleButtonClick}
      type="button"
    >
      ?{icon && <img alt="icon" className="button__icon" src={icon} />}
    </button>
  );
};

PanicButton.defaultProps = {
  disabled: false,
  height: 'small',
  icon: '',
  size: 'small',
  type: 'secondary'
};

PanicButton.propTypes = {
  disabled: PropTypes.bool,
  height: PropTypes.oneOf(['small', 'normal']),
  icon: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'normal']),
  type: PropTypes.oneOf([
    'black',
    'blank',
    'gray',
    'outline',
    'primary',
    'secondary',
    'success',
    'success-blank',
    'white'
  ])
};

export default PanicButton;
