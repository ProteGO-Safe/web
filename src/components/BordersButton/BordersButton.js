import React from 'react';
import { IconButton, Text } from './BordersButton.styled';

const BordersButton = ({ className, icon, onClick, text, children }) => {
  return (
    <IconButton className={className} onClick={onClick}>
      {icon}
      <Text>{children || text}</Text>
    </IconButton>
  );
};

export default BordersButton;
