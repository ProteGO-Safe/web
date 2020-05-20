import React from 'react';
import { useSelector } from 'react-redux';
import {
  TextWrapper,
  SmileContainer,
  UserName,
  Text,
  IconSmile
} from './Smile.styled';
import { getLastDate } from '../../utills/calendar';
import useFilledDays from '../../hooks/useFilledDays';
import useTriage from '../../hooks/useTriage';

const Smile = () => {
  const { name: userName } = useSelector(state => state.user);
  const filledDays = useFilledDays();
  const lastDate = getLastDate(filledDays);
  const { riskGroup, icon } = useTriage();
  return (
    <SmileContainer>
      <UserName>{userName},</UserName>
      <TextWrapper>
        <Text>
          <p>
            przeanalizowaliśmy Twoje odpowiedzi. Wynik testu z{' '}
            <strong>{lastDate}</strong> kwalifikuje Cię do grupy:&nbsp;
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
