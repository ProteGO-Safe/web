import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './AddTranslation.styled';

const AddTranslation = ({ path, name }) => (
  <NavLink to={path}>
    <Styled.AddTranslation>
      <Styled.Icon />
      <Styled.Name>{name}</Styled.Name>
      <Styled.Arrow />
    </Styled.AddTranslation>
  </NavLink>
);

export default AddTranslation;
