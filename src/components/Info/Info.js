import React from 'react';

import { InfoContainer } from './Info.styled';

const Info = ({ color, content }) => (
  <InfoContainer color={color}>
    <p>{content}</p>
  </InfoContainer>
);

export default Info;
