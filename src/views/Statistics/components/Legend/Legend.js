import React from 'react';
import { Color } from '../../../../theme/colors';
import { Small } from '../../../../theme/typography';
import * as Styled from './Legend.styled';

const Legend = ({ data }) => {
  const boxes = data.map(({ dot, label, value }) => (
    <Styled.Box key={label}>
      <Styled.Label>
        {dot && <Styled.Dot color={dot} />}
        <Small color={Color.white}>
          <strong>{label}</strong>
        </Small>
      </Styled.Label>
      <Styled.Value>{value}</Styled.Value>
    </Styled.Box>
  ));

  return <Styled.Wrapper>{boxes}</Styled.Wrapper>;
};

export default Legend;
