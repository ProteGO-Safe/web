import React from 'react';
import PropTypes from 'prop-types';

import './Textarea.scss';

const Textarea = ({ disabled, label, name, onChange, value }) => (
  <div className="textarea textarea__wrapper">
    {label && <span className="textarea__label">{label}</span>}
    <textarea
      className="textarea__field"
      disabled={disabled}
      name={name}
      onChange={onChange}
      value={value}
    />
  </div>
);

Textarea.defaultProps = {
  disabled: false,
  label: undefined,
  onChange: undefined,
  value: null
};

Textarea.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Textarea;
