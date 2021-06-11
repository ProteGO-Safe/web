import React from 'react';
import { Color } from '../../../../theme/colors';
import { Small } from '../../../../theme/typography';
import * as Styled from './Legend.styled';
import { T } from '../../../../components';
import { numberWithSpaces } from '../../../../utils/number';

const Legend = ({ data }) => {
  const boxes = data.map(({ dot, key, label, value }) => (
    <Styled.Box key={key}>
      <Styled.Label>
        {dot && <Styled.Dot color={dot} />}
        <Small color={Color.white}>
          <strong>
            <T i18nKey={label} />
          </strong>
        </Small>
      </Styled.Label>
      <Styled.Value>{numberWithSpaces(value)}</Styled.Value>
    </Styled.Box>
  ));

  return <Styled.Wrapper>{boxes}</Styled.Wrapper>;
};

export default Legend;
