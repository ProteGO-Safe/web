import React from 'react';
import { FollowDistrictsSlider } from '../../../FollowDistrictsSlider';
import * as Styled from './Districts.styled';

const Districts = ({ items }) => (
  <Styled.Wrapper>
    <FollowDistrictsSlider items={items} />
  </Styled.Wrapper>
);

export default Districts;
