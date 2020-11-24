import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';
import { List as L, Paragraph as P } from '../../theme/typography';

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 22px;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  color: ${Color.black};
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap column;
  width: 100%;
  margin-bottom: 24px;
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

export const Paragraph = styled(P)`
  margin-bottom: 16px;
  font-weight: ${FontWeight.SemiBold};
  line-height: 22px;
`;

export const List = styled(L)`
  list-style-type: none;
  margin: 0 0 30px;
  padding: 0;
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 24px;
  font-size: 14px;
  line-height: 20px;

  &:before {
    position: absolute;
    top: 7px;
    left: 0;
    content: '';
    background-color: ${Color.primary};
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
`;
