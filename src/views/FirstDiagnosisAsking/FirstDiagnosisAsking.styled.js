import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap column;
  width: 100%;
  margin-top: 24px;
  margin-bottom: auto;
  * {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

export const Paragraph = styled.p`
  margin-top: auto;
  margin-bottom: 24px;
  font-size: 20px;
  line-height: 1.44;
  font-weight: ${FontWeight.Normal};
  color: ${Color.lightBlack};
`;

export const Small = styled.small`
  font-size: 12px;
  font-weight: ${FontWeight.Normal};
  line-height: 20px;
  color: ${Color.lightBlack};
`;
