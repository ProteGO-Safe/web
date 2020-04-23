import React from 'react';
import { IconButton, Text } from './BordersButton.styled';

const BordersButton = ({ className, icon, onClick, text }) => {
  return (
    <IconButton className={className} onClick={onClick}>
      {icon}
      <Text>{text}</Text>
    </IconButton>
  );
};

export default BordersButton;
