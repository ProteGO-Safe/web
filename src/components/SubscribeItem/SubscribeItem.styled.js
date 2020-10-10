import styled from 'styled-components';
import { Color } from '../../theme/colors';
import IconStarOutline from '../../assets/img/icons/star-outline.svg';
import IconStarSolid from '../../assets/img/icons/star-solid.svg';

const handleColorStatus = status => {
  switch (status) {
    case 0:
      return Color.lightGray;
    case 1:
      return Color.info;
    case 2:
      return Color.danger;
    default:
      return '#fff';
  }
};

export const SubscribeItem = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  padding: 5px 0;
`;

export const Status = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${({ status }) => handleColorStatus(status)};
`;

export const Name = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: ${({ active }) => (active ? Color.primary : Color.black)};
  transition: all 0.2s ease-in;
`;

export const Action = styled.span`
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
  margin-left: auto;
  background-image: url(${({ active }) =>
    active ? IconStarSolid : IconStarOutline});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;

  &.active {
    &:before {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      background-image: url(${IconStarSolid});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 16px 16px;
      animation: animationStar 0.6s;
      animation-iteration-count: 1;
      z-index: 10;
    }
  }

  @keyframes animationStar {
    from {
      top: 0;
      opacity: 1;
    }
    to {
      top: -120px;
      opacity: 0;
    }
  }
`;
