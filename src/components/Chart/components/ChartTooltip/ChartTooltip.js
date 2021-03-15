import React from 'react';
import * as Styled from './ChartTooltip.styled';

const ChartTooltip = ({ y }) => {
  return <Styled.Tooltip>{y} das</Styled.Tooltip>;
};

export default ChartTooltip;
