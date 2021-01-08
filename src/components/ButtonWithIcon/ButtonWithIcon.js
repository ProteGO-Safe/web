import React from 'react';
import * as Styled from './ButtonWithIcon.styled';

import { ReactComponent as IconArrow } from '../../assets/img/icons/angle-right-blue.svg';

const ButtonWithIcon = ({ icon, onClick, name }) => (
  <Styled.ButtonWithIcon onClick={onClick}>
    <IconArrow />
    <Styled.Icon>{icon}</Styled.Icon>
    <Styled.Name>{name}</Styled.Name>
  </Styled.ButtonWithIcon>
);

export default ButtonWithIcon;
