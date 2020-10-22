import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const SummaryRiskTest = styled.div`
  display: flex;
  flex-flow: wrap column;
  flex: 1;
  width: 100%;
`;

export const Title = styled.h1`
  margin: 0 0 24px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${Color.black};
`;

export const Description = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 48px;
  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: ${Color.black};
`;

export const Strong = styled(Paragraph)`
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 6px;
`;

export const Annotation = styled.span`
  font-size: 12px;
  line-height: 12px;
  color: ${Color.black};
`;

export const Required = styled.span`
  display: inline-block;
  padding-left: 52px;
  width: 100%;
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 12px;
  color: ${Color.lightGray};
`;
