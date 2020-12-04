import styled from 'styled-components';
import { Color } from '../../../../../../theme/colors';
import { FontWeight } from '../../../../../../theme/fonts';

export const Paragraph = styled.p`
  margin: 24px 0;
  font-size: 12px;
  line-height: 1.6;
  font-weight: ${FontWeight.Normal};
  color: ${Color.lightBlack};
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.25;
  color: ${Color.lightBlack};
  margin-top: 0;
  margin-bottom: 30px;
`;

export const Actions = styled.div`
  display: grid;
  grid-row-gap: 24px;
  margin: 40px 0;
  width: 100%;
`;

export const Label = styled(Paragraph)`
  color: ${Color.lightBlack};
  opacity: 0.87;
`;
