import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { hexToRgba } from '../../helpers/colors';

export const CallHotline = styled.a`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  padding: 14px;
  background: ${Color.gray_6};
  border-radius: 4px;
  box-shadow: 2px 2px 3px ${hexToRgba(Color.black, 0.26)};
`;

export const Icon = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  margin-right: 16px;
  border-radius: 50%;
  background: linear-gradient(
    144deg,
    ${Color.gradient_c1} 0%,
    ${Color.gradient_c2} 50%,
    ${Color.gradient_c3} 100%
  );
`;

export const Image = styled.img`
  display: block;
  width: 50px;
  height: auto;
`;

export const Description = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: flex-start;
  width: calc(100% - 106px);
`;

export const Title = styled.h2`
  margin: 0 0 10px 0;
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  color: ${Color.primary};
`;

export const Text = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: ${Color.primary};
`;
