import React from 'react';
import * as Styled from './ButtonIconShadow.styled';
import { NavLink } from '../../../../components';

const ButtonIconShadow = ({ name, path }) => (
  <NavLink to={path}>
    <Styled.ButtonIconShadow>
      <Styled.IconWrapper>
        <Styled.Icon />
      </Styled.IconWrapper>

      <Styled.Name>{name}</Styled.Name>

      <Styled.Arrow />
    </Styled.ButtonIconShadow>
  </NavLink>
);

export default ButtonIconShadow;
