import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, placeholder, type, value }) => (
  <div className="input__wrapper">
    <input
      className="input__field"
      onChange={onChange}
      type={type}
      value={value}
    />
    <span className="input__placeholder">{placeholder}</span>
  </div>
);

Input.defaultProps = {
  onChange: undefined,
  placeholder: '',
  type: 'text',
  value: null
};

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};

export default Input;
