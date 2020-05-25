import React from 'react';
import { Button } from '../Button';
import { Color } from '../../theme/colors';
import { ButtonWrapper, IconWrapper, Title, Text } from './ResultView.styled';

const ResultView = ({ icon, title, text, buttons, colorTitle }) => {
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
      <Title color={colorTitle}>{title}</Title>
      <Text>{text}</Text>
      <ButtonWrapper>{renderButtons}</ButtonWrapper>
    </>
  );
};

ResultView.defaultProps = {
  color: Color.lightBlack
};

export default ResultView;
