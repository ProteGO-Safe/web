import React from 'react';
import {
  IconButton,
  Text,
  Description,
  Content
} from './BordersButtonWithArrow.styled';
import ArrowIcon from '../../assets/img/icons/angle-right.svg';

const BordersButtonWithArrow = ({
  className,
  icon,
  onClick,
  text,
  children,
  description
}) => {
  return (
    <IconButton className={className} onClick={onClick}>
      {icon}
      <Content>
        <Text>{children || text}</Text>
        <Description>{description}</Description>
      </Content>
      <img src={ArrowIcon} alt="button" />
    </IconButton>
  );
};

export default BordersButtonWithArrow;
