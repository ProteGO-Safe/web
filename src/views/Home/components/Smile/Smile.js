import React from 'react';
import {
  TextWrapper,
  SmileContainer,
  UserName,
  Text,
  IconSmile
} from './Smile.styled';

const Smile = ({ content, userName, IconComponent }) => {
  return (
    <SmileContainer>
      <UserName>{userName},</UserName>
      <TextWrapper>
        <Text>
          <p>{content}</p>
        </Text>
        <IconSmile>{IconComponent && <IconComponent />}</IconSmile>
      </TextWrapper>
    </SmileContainer>
  );
};

export default Smile;
