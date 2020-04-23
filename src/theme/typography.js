import styled from 'styled-components';
import { FontWeight } from './fonts';
import { Color } from './colors';

const resolveDefaultColor = defaultColor => ({ color }) =>
  color || defaultColor;

const resolveDefaultFontWeight = defaultFontWeight => ({ fontWeight }) =>
  fontWeight || defaultFontWeight;

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
  color: ${Color.lightBlack};
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: ${resolveDefaultFontWeight(FontWeight.Normal)};
  line-height: 1.5;
  color: ${resolveDefaultColor(Color.black)};

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const SmallText = styled.p`
  font-size: 14px;
  font-weight: ${resolveDefaultFontWeight(FontWeight.Normal)};
  line-height: 20px;
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

export const Title = styled(H4)`
  font-size: 18px;
  color: ${Color.primary};
  text-align: center;
  padding-bottom: 30px;
`;

export const ListNumber = styled.ol`
  padding-left: 35px;
  margin-top: 0;
`;

export const ListNumberItem = styled.li`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
  color: #1b1b1b;
  &:last-child {
    margin-bottom: 0;
  }
`;