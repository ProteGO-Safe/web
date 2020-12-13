import styled from 'styled-components';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';

export const ButtonWithDescription = styled.div`
  display: flex;
  flex-flow: ${({ position }) => (position ? 'wrap column-reverse' : 'wrap column')};
  width: 100%;
  padding: ${({ position }) => (position ? '10px 32px 10px 20px' : '20px 32px 20px 20px')};
  border: 1px solid ${({ color }) => color};
  border-radius: 4px;
`;

export const Title = styled.span`
  position: relative;
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  font-weight: ${FontWeight.Bold};
  color: ${({ color }) => color};
  svg {
    position: absolute;
    top: 5px;
    right: -22px;
    display: block;
    width: 12px;
    height: 12px;
  }
`;

export const Description = styled.span`
  display: inline-block;
  width: 100%;
  margin: ${({ position }) => (position ? '0 0 10px 0' : '10px 0 0 0')};
  font-size: 14px;
  line-height: 22px;
  color: ${Color.black};
  font-weight: ${FontWeight.Normal};
`;
