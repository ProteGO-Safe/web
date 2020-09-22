import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Error = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: 4px;
`;

export const Content = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: ${Color.danger};
`;
