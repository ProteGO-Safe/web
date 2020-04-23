import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox
} from '@material-ui/core';

import { CheckboxWrapper } from './Checkbox.styled';

const Checkbox = ({ checked, error, label, name, onChange }) => (
  <CheckboxWrapper>
    <FormControl error={error}>
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={checked}
            color="primary"
            onChange={onChange}
            name={name}
            style={{
              marginRight: `25px`
            }}
          />
        }
        label={label}
      />
    </FormControl>
  </CheckboxWrapper>
);

Checkbox.defaultProps = {
  checked: false,
  error: undefined
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
