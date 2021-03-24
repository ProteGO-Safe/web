import React, { useEffect, useRef, useState } from 'react';
import { Small } from '../../../../theme/typography';
import * as Styled from './TD.styled';

const TD = ({ color, align, value }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setWidth(ref.current.clientWidth);
  }, [setWidth]);

  return (
    <Styled.Wrapper ref={ref} align={align} padding={width * 0.35}>
      <Small color={color}>{value}</Small>
    </Styled.Wrapper>
  );
};

export default TD;
