import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  border,
  children,
  disabled,
  height,
  iconLeft,
  onClick,
  size,
  text,
  type
}) => {
  const iconPosition = iconLeft ? 'left' : 'right';

  return (
    <button
      disabled={disabled}
      className={`button button--${type} button--${height} button--size--${size} button--icon-${iconPosition} ${
        border ? 'button--border' : ''
      }`}
      onClick={onClick}
      type="button"
    >
      {children}
      {text}
    </button>
  );
};

Button.defaultProps = {
  border: false,
  children: null,
  disabled: false,
  height: 'normal',
  iconLeft: false,
  size: 'normal',
  type: 'primary'
};

Button.propTypes = {
  border: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  height: PropTypes.oneOf(['small', 'normal']),
  iconLeft: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'normal']),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'black',
    'blank',
    'gray',
    'outline',
    'primary',
    'secondary',
    'tertiary',
    'success',
    'success-blank',
    'white'
  ])
};

export default Button;
