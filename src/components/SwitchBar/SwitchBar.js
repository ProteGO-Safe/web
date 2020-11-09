import React from 'react';
import { Switch } from '@material-ui/core';
import * as Styled from './SwitchBar.styled';

const SwitchBar = ({ checked, content, onChange }) => (
  <Styled.Wrapper>
    <Styled.Inner>
      <Styled.Content>{content}</Styled.Content>
      <Styled.Switch>
        <Switch checked={checked} onChange={onChange} />
      </Styled.Switch>
    </Styled.Inner>
  </Styled.Wrapper>
);

export default SwitchBar;
