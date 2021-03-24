import React from 'react';
import { Tabs as MuiTabs } from '@material-ui/core';
import * as Styled from './Tabs.styled';

const Tabs = ({ children, handleChange, value }) => {
  return (
    <Styled.Tabs>
      <MuiTabs onChange={handleChange} value={value} variant="scrollable">
        {children}
      </MuiTabs>
    </Styled.Tabs>
  );
};

export default Tabs;
