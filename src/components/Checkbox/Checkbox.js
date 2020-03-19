import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const Checkbox = ({ description, name, onChange, type, value }) => (
  <div className="checkbox checkbox__wrapper">
    <div className="checkbox__field__wrapper">
      <input
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
  description: undefined,
  onChange: undefined,
  type: 'checkbox',
  value: null
};

Checkbox.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  value: PropTypes.string
};

export default Checkbox;
