import React from 'react';
import PropTypes from 'prop-types';

import './Option.scss';

const Option = ({ checked, name, onChange, text, value }) => (
  <div className="option option__wrapper">
    <input
      checked={checked}
      className="option__field"
      name={name}
      onChange={onChange}
      type="radio"
      value={value}
    />
    <div className="option__label">{text}</div>
  </div>
);

Option.defaultProps = {
  checked: false
};

Option.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Option;
