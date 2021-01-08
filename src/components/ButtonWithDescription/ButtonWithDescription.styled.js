import styled from 'styled-components';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';

export const ButtonWithDescription = styled.div`
  display: flex;
  flex-flow: ${({ position }) => (position ? 'wrap column-reverse' : 'wrap column')};
  width: 100%;
  padding: ${({ position }) => (position ? '10px 32px 10px 20px' : '20px 32px 20px 20px')};
  ${({ padding }) => padding && 'padding-right: 20px!important'};
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
    top: 50%;
    right: ${({ arrowPosition }) => (arrowPosition ? '-10px' : '-22px')};
    display: block;
    width: 12px;
    height: 12px;
    margin-top: -6px;
  }
`;

export const Description = styled.span`
  display: inline-block;
  width: 100%;
  margin: ${({ position }) => (position ? '0 0 10px 0' : '10px 0 0 0')};
  ${({ margin }) => margin && 'margin-top: 20px!important'};
  font-size: 14px;
  line-height: 22px;
  color: ${Color.black};
  font-weight: ${FontWeight.Normal};
`;

export const Children = styled(Description)`
  margin: 0 0 20px 0 !important;
`;
