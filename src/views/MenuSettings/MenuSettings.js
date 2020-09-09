import React from 'react';
import * as Styled from './MenuSettings.styled';

const MenuSettings = ({ items }) => {
  const renderMenu = items.map(({ disabled, name, icon, path }) => (
    <Styled.Item key={name} to={path} disabled={disabled}>
      <Styled.Icon src={icon} />
      <Styled.Name>{name}</Styled.Name>
      <Styled.Arrow />
    </Styled.Item>
  ));

  return <Styled.MenuSettings>{renderMenu}</Styled.MenuSettings>;
};

export default MenuSettings;
