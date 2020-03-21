import React from 'react';
import PropTypes from 'prop-types';

import './FieldSet.scss';

const FieldSet = ({ children, horizontal }) => (
  <div className={`fieldset ${horizontal ? 'fieldset--horizontal' : ''}`}>
    {children}
  </div>
);

FieldSet.defaultProps = {
  horizontal: false
};

FieldSet.propTypes = {
  children: PropTypes.node.isRequired,
  horizontal: PropTypes.bool
};

export default FieldSet;
