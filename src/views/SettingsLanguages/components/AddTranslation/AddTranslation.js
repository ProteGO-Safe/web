import React from 'react';
import * as Styled from './AddTranslation.styled';
import { NavLink } from '../../../../components';

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
