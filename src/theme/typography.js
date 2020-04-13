import styled from 'styled-components';
import { FontWeight } from './fonts';
import { Color } from './colors';

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
  color: ${Color.darkGray};
`;

export const H5 = styled.h5`
  font-weight: ${FontWeight.Bold};
  font-size: 20px;
  line-height: 1.25;
  color: ${Color.darkGray};
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.5;
  color: ${Color.darkGray};
`;

export const SmallText = styled.p`
  font-size: 16px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.5;
  color: ${Color.darkGray};
`;

export const Annotation = styled.p`
  font-size: 12px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.5;
  color: ${Color.darkGray};
`;
