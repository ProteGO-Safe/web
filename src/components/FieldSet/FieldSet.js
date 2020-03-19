import React from 'react';
import PropTypes from 'prop-types';

import './FieldSet.scss';

const FieldSet = ({ children }) => (
  <div className="fieldset">{children}</div>
);

FieldSet.propTypes = {
  children: PropTypes.node.isRequired
};

export default FieldSet;
