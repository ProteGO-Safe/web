import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

export const Title = styled.h1`
  margin-top: auto;
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1.2;
  color: ${Color.lightBlack};
  font-weight: ${FontWeight.Bold};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap column;
  width: 100%;
  margin-top: 24px;
  margin-bottom: auto;
  > *:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 1.44;
  font-weight: 400;
  color: #1b1b1b;
  &:last-of-type {
    margin-bottom: 38px;
  }
`;

export const Label = styled.span`
  margin-top: auto;
  margin-bottom: 4px;
  font-size: 20px;
  line-height: 1.4;
  font-weight: ${FontWeight.Normal};
  color: ${Color.lightBlack};
`;
