import styled from 'styled-components';
import { Color } from '../../../../../../theme/colors';

export const ExposureHigh = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-right: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${Color.black};
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
