import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

export const Wrapper = styled.div`
  margin-top: 24px;
  width: 100%;
`;

export const Icons = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  align-items: center;
  svg {
    width: calc(100% / 3 - 4px);
    height: calc(100% / 3);
  }
`;

export const Title = styled.h1`
  margin-top: 24px;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: ${FontWeight.Bold};
  line-height: 1.5;
  color: ${Color.lightBlack};
`;

export const Paragraph = styled.p`
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 1.44;
  font-weight: ${FontWeight.Normal};
  color: ${Color.lightBlack};
`;
