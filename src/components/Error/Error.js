import React from 'react';
import * as Styled from './Error.styled';

const Error = ({ content }) => (
  <Styled.Error>
    <Styled.Content>{content}</Styled.Content>
  </Styled.Error>
);

export default Error;
