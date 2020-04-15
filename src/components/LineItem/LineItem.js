import React from 'react';
import { AngleRight, ArrowButton, Text } from './LineItem.styled';

const LineItem = ({ onClick, text }) => {
  return (
    <ArrowButton onClick={onClick}>
      <Text>{text}</Text>
      <AngleRight />
    </ArrowButton>
  );
};

export default LineItem;
