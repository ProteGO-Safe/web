import React from 'react';
import { Button } from '../index';
import { Color } from '../../theme/colors';
import { ButtonWrapper, IconWrapper, Title, Text } from './ResultView.styled';

const ResultView = ({ icon, title, text, buttons, colorTitle }) => {
  const renderButtons = buttons.map(({ label, onClick }) => (
    <Button key={label} onClick={onClick} label={label} />
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
