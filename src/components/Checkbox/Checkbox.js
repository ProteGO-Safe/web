import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const Checkbox = ({
  checked,
  error,
  description,
  name,
  onChange,
  size,
  type,
  value
}) => {
  const errorClass = (() => {
    if (error) {
      return 'checkbox__error';
    }
    return '';
  })();
  return (
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
        <span className="checkbox__description__wrapper">
          <div className={`checkbox__btn ${errorClass}`} />
          {description && (
            <span className="checkbox__description">{description}</span>
          )}
        </span>
        {error && <span className="checkbox__error_description">{error}</span>}
      </div>
    </div>
  );
};

Checkbox.defaultProps = {
  checked: false,
  error: undefined,
  description: undefined,
  onChange: undefined,
  size: 'normal',
  type: 'checkbox',
  value: ''
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  error: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['big', 'normal']),
  type: PropTypes.oneOf(['checkbox', 'radio']),
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

export default Checkbox;
