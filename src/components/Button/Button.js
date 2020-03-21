import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  children,
  disabled,
  height,
  icon,
  onClick,
  size,
  text,
  type
}) => (
  <button
    disabled={disabled}
    className={`button button--${type} button--${height} button--size--${size}`}
    onClick={onClick}
    type="button"
  >
    {children}
    {text}
    {icon && <img alt="icon" className="button__icon" src={icon} />}
  </button>
);

Button.defaultProps = {
  children: null,
  disabled: false,
  height: 'normal',
  icon: '',
  size: 'normal',
  type: 'primary'
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  height: PropTypes.oneOf(['small', 'normal']),
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'normal']),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'black',
    'blank',
    'gray',
    'primary',
    'secondary',
    'success',
    'success-blank'
  ])
};

export default Button;
