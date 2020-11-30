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
  margin-bottom: auto;
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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap column;
  width: 100%;
  margin-top: 24px;
  * {
    margin-bottom: 8px;
  }
`;

export const Annotation = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 24px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: ${Color.black};
`;

export const Link = styled.span`
  display: inline;
  color: ${Color.primary};
  cursor: pointer;
`;
