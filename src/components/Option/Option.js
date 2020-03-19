import React from 'react';
import PropTypes from 'prop-types';

import './Option.scss';

const Option = ({ checked, onChange, text, value }) => (
  <div className="option option__wrapper">
    <input
      checked={checked}
      className="option__field"
      onChange={onChange}
      type="radio"
      value={value}
    />
    <div className="option__label">{text}</div>
  </div>
);

Option.defaultProps = {
  checked: null
};

Option.propTypes = {
  checked: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Option;
