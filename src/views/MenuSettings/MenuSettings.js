import React from 'react';
import * as Styled from './MenuSettings.styled';
import { NavLink } from '../../components';

const MenuSettings = ({ items }) => {
  const renderMenu = items.map(({ disabled, name, icon, path }) => (
    <NavLink key={name} to={disabled ? undefined : path}>
      <Styled.Item disabled={disabled}>
        <Styled.Icon src={icon} />
        <Styled.Name>{name}</Styled.Name>
        <Styled.Arrow />
      </Styled.Item>
    </NavLink>
  ));

  return <Styled.MenuSettings>{renderMenu}</Styled.MenuSettings>;
};

export default MenuSettings;
