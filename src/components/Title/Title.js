import React from 'react';
import * as Styled from './Title.styled';
import { Paragraph } from '../../theme/typography';
import { FontWeight } from '../../theme/fonts';

const Title = ({ icon, text }) => (
  <Styled.Wrapper>
    <Styled.Icon>{icon}</Styled.Icon>
    <Paragraph fontWeight={FontWeight.Bold}>{text}</Paragraph>
  </Styled.Wrapper>
);

export default Title;
