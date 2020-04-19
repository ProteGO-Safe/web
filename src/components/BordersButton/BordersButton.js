import React from 'react';
import { IconButton, Text } from './BordersButton.styled';

const BordersButton = ({ icon, onClick, text }) => {
  return (
    <IconButton onClick={onClick}>
      {icon}
      <Text>{text}</Text>
    </IconButton>
  );
};

export default BordersButton;
