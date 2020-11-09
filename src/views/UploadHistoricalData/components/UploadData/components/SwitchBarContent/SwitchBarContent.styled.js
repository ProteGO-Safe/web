import styled from 'styled-components';
import { SmallText } from '../../../../../../theme/typography';
import { Color } from '../../../../../../theme/colors';

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 20px;
  align-items: center;

  ${SmallText} {
    color: ${Color.black};
  }
`;
