import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Switch } from '@material-ui/core';
import { SwitcherWrapper } from './Switcher.styled';

const Switcher = ({ checked, disabled, label, name, onChange }) => {
  return (
    <SwitcherWrapper>
      <FormControlLabel
        disabled={disabled}
        control={
          <Switch
            size="medium"
            checked={checked}
            onChange={onChange}
            name={name}
          />
        }
        label={label}
      />
    </SwitcherWrapper>
  );
};

Switcher.defaultProps = {
  checked: false,
  disabled: false
};

Switcher.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Switcher;
