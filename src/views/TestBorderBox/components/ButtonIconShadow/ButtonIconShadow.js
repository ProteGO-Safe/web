import React from 'react';
import * as Styled from './ButtonIconShadow.styled';

const ButtonIconShadow = ({ name, path }) => (
  <Styled.ButtonIconShadow to={path}>
    <Styled.IconWrapper>
      <Styled.Icon />
    </Styled.IconWrapper>

    <Styled.Name>{name}</Styled.Name>

    <Styled.Arrow />
  </Styled.ButtonIconShadow>
);

export default ButtonIconShadow;
