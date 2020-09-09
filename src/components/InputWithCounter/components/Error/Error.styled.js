import styled from 'styled-components';
import { Color } from '../../../../theme/colors';

export const Error = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 12px;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: 0;
  color: ${Color.danger};
`;
