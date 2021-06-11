import React from 'react';
import * as Styled from './TD.styled';

const TD = ({ children, colspan, align }) => {
  return (
    <Styled.Wrapper align={align} colspan={colspan}>
      {children}
    </Styled.Wrapper>
  );
};

export default TD;
