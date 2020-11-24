import styled from 'styled-components';
import { FontWeight } from '../../../../theme/fonts';
import { Color } from '../../../../theme/colors';

export const ContentModal = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.span`
  display: block;
  width: 100%;
  max-width: 262px;
  margin: 0 auto 12px;
  font-size: 18px;
  line-height: 24px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
  text-align: center;
`;

export const Description = styled.div`
  display: block;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.black};
  text-align: center;
  > strong {
    font-weight: ${FontWeight.SemiBold};
  }
`;
