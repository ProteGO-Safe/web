import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap column;
  width: 100%;
  margin-top: ${({ mrgT }) => mrgT || 10}px;
  padding: ${({ padding }) => (padding ? '0' : '0 17px')};
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 98px;

  > svg {
    display: block;
    max-height: 100%;
    width: auto;
  }
`;

export const Title = styled.h3`
  width: 100%;
  margin: 20px 0 21px;
  font-size: 16px;
  line-height: 22px;
  color: ${Color.black};
  font-weight: ${FontWeight.SemiBold};
  text-align: center;
`;

export const Description = styled.p`
  margin: 0 0 21px 0;
  font-size: 14px;
  line-height: 20px;
  color: ${Color.black};
  font-weight: ${FontWeight.Normal};
`;
