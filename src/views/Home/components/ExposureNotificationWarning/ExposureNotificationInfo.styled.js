import styled from 'styled-components';
import { Color } from '../../../../theme/colors';

export const Icon = styled.img`
  display: block;
  height: 46px;
  margin-bottom: 12px;
`;

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 30px;
  margin-bottom: 4px;
  color: ${Color.gray};
  font-size: 14px;
  + * {
    margin-top: 12px;
  }
`;
