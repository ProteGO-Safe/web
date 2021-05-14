import styled from 'styled-components';
import { Small } from '../../../../../../theme/typography';

export const CellContent = styled(Small)`
  padding-right: ${({ isFirst }) => (isFirst ? 0 : `${28}px`)};
`;
