import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  color: ${Color.black};
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap column;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Link = styled.span`
  display: inline-block;
  color: ${Color.primary};
  font-weight: bold;
  text-transform: uppercase;
`;

export const UrlLink = styled.a`
  display: inline-block;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const Small = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 8px;
  font-size: 10px;
  line-height: 14px;
  font-weight: 400;
  color: ${Color.primary};
`;
