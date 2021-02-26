import React from 'react';
import { RippleEffect } from '../../../index';
import * as Styled from './ItemBox.styled';

const ItemBox = ({ heading, firstStats, secondStats, onClick }) => (
  <Styled.Wrapper onClick={onClick}>
    <Styled.Heading>{heading}</Styled.Heading>
    <Styled.FirstStats>{firstStats}</Styled.FirstStats>
    <Styled.SecondStats>{secondStats}</Styled.SecondStats>

    <Styled.Line />

    <RippleEffect />
  </Styled.Wrapper>
);

export default ItemBox;
