import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Close from '../../assets/img/icons/notifi_close.svg';
import './Input.scss';

const Input = ({
  description,
  disabled,
  error,
  icon,
  label,
  max,
  min,
  name,
  onChange,
  onKeyPress,
  placeholder,
  reset,
  size,
  type,
  value
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.oncopy = e => {
        e.preventDefault();
        return false;
      };
    }
  }, [ref]);
  return (
    <div className="input input__wrapper">
      {icon && value.length < 1 && (
        <span className="input__icon">
          <img src={icon} alt={placeholder} />
        </span>
      )}
      {value.length >= 1 && (
        <span className="input__reset" onClick={reset}>
          <img src={Close} alt="Resetuj" />
        </span>
      )}
      {label && <span className="input__label">{label}</span>}
      <input
        className={`input__field input__field--${size} ${icon && 'padding'}`}
        max={max}
        disabled={disabled}
        min={min}
        name={name}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        ref={ref}
        step="0.1"
        type={type}
        value={value}
        {...(type === 'number' && { pattern: 'd*' })}
        {...(type === 'number' && { inputMode: 'decimal' })}
      />
      {description && <span className="input__description">{description}</span>}
      {error && <span className="input__error">{error}</span>}
    </div>
  );
};

Input.defaultProps = {
  error: undefined,
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
  error: PropTypes.string,
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
  type: PropTypes.oneOf(['text', 'number']),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Input;
