import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ description, name, onChange, placeholder, type, value }) => (
  <div className="input input__wrapper">
    <input
      className="input__field"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
    {description && <span className="input__description">{description}</span>}
  </div>
);

Input.defaultProps = {
  description: undefined,
  onChange: undefined,
  placeholder: '',
  type: 'text',
  value: null
};

Input.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};

export default Input;
