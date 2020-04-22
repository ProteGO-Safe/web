import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Switch } from '@material-ui/core';
import { SwitcherWrapper } from './Switcher.styled';

const Switcher = ({ label, name }) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };

  return (
    <SwitcherWrapper>
      <FormControlLabel
        control={
          <Switch
            size="medium"
            checked={checked}
            onChange={toggleChecked}
            name={name}
          />
        }
        label={label}
      />
    </SwitcherWrapper>
  );
};

Switcher.defaultProps = {
  checked: false
};

Switcher.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Switcher;
