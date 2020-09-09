import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap row;
  width: 100%;
  max-width: 338px;
  height: auto;
  min-height: 44px;
  padding: 7px 12px;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0;
  -webkit-appearance: none;
  border-style: none;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  &:disabled {
    background: ${Color.darkGray};
    color: ${Color.white};
    border: 2px solid ${Color.darkGray};
    pointer-events: none;
  }
  &:hover,
  &:focus {
    outline: none;
  }
`;

export const ButtonDefault = styled(Button)`
  background-color: ${Color.primary};
  color: ${Color.white};
`;

export const ButtonOutline = styled(Button)`
  border-width: 2px;
  border-style: solid;
  background-color: ${Color.white};
  border-color: ${Color.primary};
  color: ${Color.primary};
`;

export const ButtonBorder = styled(Button)`
  justify-content: flex-start;
  border-width: 1px;
  border-style: solid;
  border-color: ${Color.veryLightGrey};
  background-color: ${Color.white};
  border-radius: 4px;
  padding: 20px 28px;
  margin-bottom: 24px;
  text-transform: none;
  > svg {
    width: 40px;
    height: auto;
    margin-right: 24px;
  }
`;

export const ButtonBorderArrow = styled(ButtonBorder)`
  position: relative;
  padding-right: 40px;
  color: ${Color.primary};
`;

export const ArrowRight = styled.span`
  position: absolute;
  top: 50%;
  right: 15px;
  height: 16px;
  width: 16px;
  margin-top: -8px;
  z-index: 10;
  > svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

export const Content = styled.span`
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  width: calc(100% - 64px);
`;

export const Description = styled.span`
  font-size: 11px;
  line-height: 2;
  font-weight: 400;
  color: ${Color.primary};
  text-align: left;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  color: ${Color.primary};
  text-align: left;
`;

export const ButtonBlankSmall = styled(Button)`
  min-height: 1px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${Color.black};
  font-size: 13px;
  font-weight: normal;
  text-transform: none;
`;
