import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const Checkbox = ({
  checked,
  description,
  name,
  onChange,
  size,
  type,
  value
}) => (
  <div className={`checkbox checkbox__wrapper ${size}`}>
    <div className="checkbox__field__wrapper">
      <input
        checked={checked}
        className="checkbox__field"
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
      <div className="checkbox__btn" />
      {description && (
        <span className="checkbox__description">{description}</span>
      )}
    </div>
  </div>
);

Checkbox.defaultProps = {
  checked: false,
  description: undefined,
  onChange: undefined,
  size: 'normal',
  type: 'checkbox',
  value: ''
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['big', 'normal']),
  type: PropTypes.oneOf(['checkbox', 'radio']),
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

export default Checkbox;
