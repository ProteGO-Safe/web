import React from 'react';
import { Button } from '../Button';
import { ButtonWrapper, IconWrapper, Title, Text } from './ResultView.styled';

const ResultView = ({ icon, title, text, buttons }) => {
  const renderButtons = buttons.map(button => (
    <Button
      key={button.text}
      onClick={button.onClick}
      text={button.text}
      border={button.border}
    />
  ));
  return (
    <>
      <IconWrapper>
        <img src={icon} alt={title} />
      </IconWrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <ButtonWrapper>{renderButtons}</ButtonWrapper>
    </>
  );
};

export default ResultView;
