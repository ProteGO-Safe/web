import styled from 'styled-components';
import { FontWeight } from './fonts';
import { Color } from './colors';

const resolveDefaultColor = defaultColor => ({ color }) => color || defaultColor;

const resolveDefaultFontWeight = defaultFontWeight => ({ fontWeight }) => fontWeight || defaultFontWeight;

export const H1 = styled.h1`
  font-size: 42px;
  font-weight: ${FontWeight.Bold};
  line-height: 0.95;
  color: ${Color.darkGray};
`;

export const H2 = styled.h2`
  font-weight: ${FontWeight.Bold};
  font-size: 32px;
  line-height: 1.25;
  color: ${Color.darkGray};
`;

export const H3 = styled.h3`
  font-weight: ${FontWeight.Bold};
  font-size: 28px;
  line-height: 1.25;
  color: ${Color.darkGray};
`;

export const H4 = styled.h4`
  font-weight: ${FontWeight.Bold};
  font-size: 24px;
  line-height: 1.25;
  color: ${resolveDefaultColor(Color.darkGray)};
`;

export const H5 = styled.h5`
  font-weight: ${FontWeight.Bold};
  font-size: 20px;
  line-height: 1.25;
  color: ${resolveDefaultColor(Color.lightBlack)};
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: ${resolveDefaultFontWeight(FontWeight.Normal)};
  line-height: 1.5;
  color: ${resolveDefaultColor(Color.black)};

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const SmallText = styled.p`
  font-size: 14px;
  font-weight: ${resolveDefaultFontWeight(FontWeight.Normal)};
  line-height: 20px;
  color: ${resolveDefaultColor(Color.darkGray)};
`;

export const Small = styled.p`
  font-size: 12px;
  font-weight: ${resolveDefaultFontWeight(FontWeight.Normal)};
  line-height: 1.5;
  color: ${resolveDefaultColor(Color.darkGray)};
`;

export const Annotation = styled.p`
  font-size: 12px;
  font-weight: ${resolveDefaultFontWeight(FontWeight.Normal)};
  line-height: 1.5;
  color: ${Color.lightBlack};
`;

export const TextLink = styled.span`
  color: ${Color.primary};
  text-decoration: underline;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 12px 0 40px;
  padding: 0;
`;

export const ListItem = styled(Paragraph)`
  position: relative;
  padding-left: 35px;

  &:before {
    position: absolute;
    top: 7px;
    left: 0;
    content: '';
    background-color: ${Color.primary};
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }
`;

export const Name = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: ${FontWeight.Bold};
  line-height: 1.4;
  color: ${Color.lightBlack};
`;

export const Link = styled.a`
  color: ${Color.primary};
  font-weight: ${FontWeight.SemiBold};
`;

export const Strong = styled.strong`
  font-weight: ${FontWeight.Bold};
`;
