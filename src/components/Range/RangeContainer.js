import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import Range from './Range';

const RangeContainer = ({ disable, field, label }) => {
  const { setFieldValue, values } = useFormikContext();
  const handleClick = value => setFieldValue(field, value);
  const defaultValue = values[field];

  return <Range disable={disable} label={label} onClick={handleClick} value={defaultValue} />;
};

RangeContainer.propTypes = {
  disable: PropTypes.bool.isRequired,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default RangeContainer;
