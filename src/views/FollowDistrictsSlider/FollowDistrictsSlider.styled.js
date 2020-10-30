import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { ReactComponent as IconArrow } from '../../assets/img/icons/arrow-current-color.svg';

export const FollowDistrictsSlider = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: 4px;
  padding: ${({ padding }) => (padding ? '10px 17px' : '10px 0 0')};
  background-color: ${Color.primaryLighter};
`;

export const Title = styled.span`
  width: 100%;
  margin: 0 0 8px 0;
  padding-right: 17px;
  padding-left: 17px;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: ${Color.black};
`;

export const Badge = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  line-height: 1rem;
  color: ${Color.white};
  transform: translateY(-0.1rem);
  background-color: ${Color.primary};
  border-radius: 50%;
`;

export const Slider = styled.div`
  display: flex;
  flex-flow: nowrap row;
  width: 100%;
  padding-left: 17px;
  padding-right: 17px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
`;

export const Button = styled.span`
  position: relative;
  width: 100%;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 600;
  color: ${Color.black};
`;

export const Icon = styled(IconArrow)`
  position: absolute;
  top: 1px;
  right: 0;
  width: 1rem;
  height: 1rem;
  color: ${Color.primary};
`;
