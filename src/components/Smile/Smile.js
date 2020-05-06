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
            przeanalizowaliśmy Twoje odpowiedzi. Wynik testu z{' '}
            <strong className="nowrap">{lastDate}</strong> kwalifikuje Cię do
            grupy:&nbsp;
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
