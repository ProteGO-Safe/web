import React from 'react';
import {
  TextWrapper,
  SmileContainer,
  UserName,
  Text,
  IconSmile
} from './Smile.styled';

const Smile = ({ content, userName, icon }) => {
  return (
    <SmileContainer>
      <UserName>{userName},</UserName>
      <TextWrapper>
        <Text>
          <p>{content}</p>
        </Text>
        <IconSmile>
          <img src={icon} alt={userName} />
        </IconSmile>
      </TextWrapper>
    </SmileContainer>
  );
};

export default Smile;
