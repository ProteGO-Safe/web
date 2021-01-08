import React from 'react';
import * as Styled from './MenuSettings.styled';
import { NavLink } from '../../components';

const MenuSettings = ({ items }) => {
  const renderMenu = items.map(({ disabled, name, icon, path }) => (
    <NavLink key={path} to={disabled ? undefined : path}>
      <Styled.Item disabled={disabled}>
        <Styled.IconWrapper>{icon}</Styled.IconWrapper>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Arrow />
      </Styled.Item>
    </NavLink>
  ));

  return <Styled.Wrapper>{renderMenu}</Styled.Wrapper>;
};

export default MenuSettings;
