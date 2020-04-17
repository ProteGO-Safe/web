import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Select as MuiSelect } from '@material-ui/core';
import { Label } from '../../theme/form';
import { SelectWrapper } from './Select.styled';

const Select = ({ changeHandler, label, name, options, required, value }) => {
  const renderOptions = options.map(option => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  const onChange = e => changeHandler(name, e.target.value);

  return (
    <SelectWrapper>
      <FormControl required={required} variant="outlined">
        {label && <Label required={required}>{label}</Label>}
        <MuiSelect name={name} native onChange={onChange} value={value}>
          {renderOptions}
        </MuiSelect>
      </FormControl>
    </SelectWrapper>
  );
};

Select.defaultProps = {
  label: undefined
};

Select.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired
    })
  ).isRequired
};

export default Select;
