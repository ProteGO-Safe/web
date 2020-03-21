import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({
  description,
  disabled,
  label,
  min,
  max,
  name,
  onChange,
  onKeyPress,
  placeholder,
  size,
  type,
  value
}) => (
  <div className="input input__wrapper">
    {label && <span className="input__label">{label}</span>}
    <input
      className={`input__field input__field--${size}`}
      max={max}
      disabled={disabled}
      min={min}
      name={name}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      type={type}
      value={value}
    />
    {description && <span className="input__description">{description}</span>}
  </div>
);

Input.defaultProps = {
  description: undefined,
  disabled: false,
  label: undefined,
  max: undefined,
  min: undefined,
  onChange: undefined,
  onKeyPress: () => null,
  placeholder: '',
  size: 'normal',
  type: 'text',
  value: null
};

Input.propTypes = {
  description: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal']),
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Input;
