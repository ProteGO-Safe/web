import styled from 'styled-components';
import { Color } from '../../../../theme/colors';

export const Label = styled.div`
  width: 100%;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${Color.black};
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
`;
