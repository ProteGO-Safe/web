import styled from 'styled-components';
import { Color } from '../../theme/colors';

import { ReactComponent as SmileGreen } from '../../assets/img/icons/smile-green.svg';

export const InfoLabTest = styled.div`
  flex: 1;
  display: flex;
  flex-flow: wrap column;
  align-items: flex-start;
`;

export const Icon = styled(SmileGreen)`
  display: block;
  width: 70px;
  height: 70px;
  margin: 16px auto 30px;
`;

export const Title = styled.h1`
  width: 100%;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${Color.black};
`;

export const Description = styled.div`
  width: 100%;
  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${Color.black};
`;

export const Strong = styled(Paragraph)`
  font-weight: 700;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 16px;
  > *:not(:last-child) {
    margin-bottom: 12px;
  }
`;
