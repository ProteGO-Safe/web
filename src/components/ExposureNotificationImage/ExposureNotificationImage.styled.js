import styled, { keyframes } from 'styled-components';
import { hexToRgba } from '../../helpers/colors';

import { ReactComponent as ENImageActive } from '../../assets/img/icons/reka-aktywny.svg';
import { ReactComponent as ENImageDisactive } from '../../assets/img/icons/reka-nieaktywny.svg';

const pulsingOne = keyframes`
  0% {
    opacity: 1;
    transform: scaleY(1) scaleX(1);
  }
  20% {
    opacity: 0.5;
  }
  70% {
    opacity: 0.2;
    transform: scaleY(1.6) scaleX(1.6);
  }
  80% {
    opacity: 0;
    transform: scaleY(1.6) scaleX(1.6);
  }
  90% {
    opacity: 0;
    transform: scaleY(1) scaleX(1);
  }
`;

const pulsingTwo = keyframes`
0% {
    opacity: 1;
    transform: scaleY(1) scaleX(1);
}
  20% {
    opacity: 0.5;
  }
  70% {
    opacity: 0.2;
    transform: scaleY(1.2) scaleX(1.2);
}
  80% {
    opacity: 0;
    transform: scaleY(1.2) scaleX(1.2);
}
  90% {
    opacity: 0;
    transform: scaleY(1) scaleX(1);
}
`;

export const ExposureNotificationImage = styled.div`
  position: relative;
  width: 122px;
  height: 122px;
`;

export const ImageActive = styled(ENImageActive)`
  position: absolute;
  right: 14px;
  bottom: 2px;
  width: 66px;
  height: 83px;
  z-index: 5;
`;

export const ImageDisactive = styled(ENImageDisactive)`
  position: absolute;
  right: 14px;
  bottom: 2px;
  width: 66px;
  height: 114px;
  z-index: 5;
`;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 90px;
  height: 90px;
  margin: -45px 0 0 -45px;
  border-radius: 50%;
  background-color: ${({ color }) => hexToRgba(color, 0.3)};
  z-index: 3;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 90px;
    height: 90px;
    border: inherit;
    border-radius: 50%;
    background: ${({ color }) => hexToRgba(color, 0.2)};
    animation: ${pulsingOne} 2.5s linear infinite;
    z-index: 1;
  }
  &:after {
    animation: ${pulsingTwo} 2.5s linear infinite;
    background: ${({ color }) => hexToRgba(color, 0.3)};
  }
`;
