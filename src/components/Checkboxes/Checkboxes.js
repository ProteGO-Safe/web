import React from 'react';
import PropTypes from 'prop-types';

const Checkboxes = ({ children }) => (
  <div className="checkboxes">{children}</div>
);

Checkboxes.propTypes = {
  children: PropTypes.node.isRequired
};

export default Checkboxes;
