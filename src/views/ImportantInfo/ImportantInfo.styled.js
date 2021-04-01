import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Container = styled.div`
  display: grid;
  column-gap: 17px;
  row-gap: 17px;
  padding: 17px;
  background-color: ${Color.white};
  width: 100%;

  ${({ size }) =>
    size
      ? `
    grid-template-columns: 100%;
  `
      : `
    grid-template-columns: repeat(2, calc(50% - 8.5px));
  `}
`;
