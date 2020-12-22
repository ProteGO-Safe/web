import styled from 'styled-components';
import { Color } from '../../../../theme/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;
  padding: 14px 20px;
  border: 1px solid ${Color.primary};
  border-radius: 4px;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

export const Content = styled.div`
  width: calc(100% - 40px);
  font-size: 14px;
  line-height: 22px;
  color: ${Color.black};
`;
