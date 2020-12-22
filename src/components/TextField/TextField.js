import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MuiTextField } from '@material-ui/core';

import { Label, TextFieldWrapper, Information } from './TextField.styled';

const TextField = ({ error, disabled, label, name, onChange, placeholder, info, type, value }) => (
  <TextFieldWrapper>
    {label && <Label>{label}</Label>}
    <MuiTextField
      disabled={disabled}
      error={error}
      helperText={error}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      variant="outlined"
    />
    {info && <Information>{info}</Information>}
  </TextFieldWrapper>
);

TextField.defaultProps = {
  error: undefined,
  disabled: false,
  label: undefined,
  placeholder: '',
  type: 'text',
  value: null,
  info: ''
};

TextField.propTypes = {
  info: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default TextField;
