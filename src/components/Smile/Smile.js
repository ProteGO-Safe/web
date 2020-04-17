import React from 'react';

import {
  TextWrapper,
  SmileContainer,
  UserName,
  Text,
  IconSmile
} from './Smile.styled';

const Smile = ({ userName, lastDate, riskGroup, icon }) => {
  return (
    <SmileContainer>
      <UserName>{userName},</UserName>
      <TextWrapper>
        <Text>
          <p>
            Przeanalizowaliśmy Twoje odpowiedzi na podstawie wytycznych WHO.
            <br />
            Wynik testu z <strong>{lastDate}</strong> kwalifikuje Cię do grupy:{' '}
            <strong>{riskGroup}</strong>.
          </p>
        </Text>
        <IconSmile>
          <img src={icon} alt={userName} />
        </IconSmile>
      </TextWrapper>
    </SmileContainer>
  );
};

export default Smile;
