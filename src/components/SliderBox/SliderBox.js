import React from 'react';
import * as Styled from './SliderBox.styled';

const SliderBox = ({ icon, title, handleHeadClick, items }) => (
  <Styled.Wrapper>
    <Styled.Head onClick={handleHeadClick}>
      <Styled.Icon>{icon}</Styled.Icon>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Head>

    <Styled.Slider>{items}</Styled.Slider>
  </Styled.Wrapper>
);

export default SliderBox;
