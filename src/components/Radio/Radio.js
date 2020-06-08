import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormControlLabel,
  Radio as MuiRadio
} from '@material-ui/core';

import { RadioWrapper } from './Radio.styled';

const Radio = ({ checked, error, label, name, onChange }) => (
  <RadioWrapper>
    <FormControl error={error}>
      <FormControlLabel
        control={
          <MuiRadio
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
  </RadioWrapper>
);

Radio.defaultProps = {
  checked: false,
  error: undefined
};

Radio.propTypes = {
  checked: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Radio;
