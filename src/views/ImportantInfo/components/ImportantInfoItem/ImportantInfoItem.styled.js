import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { hexToRgba } from '../../../../helpers/colors';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ItemContent = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  height: 100%;
  background: ${Color.gray_6};
  border-radius: 4px;
  box-shadow: 2px 2px 3px ${hexToRgba(Color.black, 0.26)};
  transition: all 0.1s ease-in;
  overflow: hidden;

  ${({ size }) =>
    size
      ? `
    align-content: flex-start;
    padding: 20px 20px 26px 70px;
    min-height: 0;
  `
      : `
    align-content: space-between;
    min-height: 204px;
    padding: 30px 10px 28px;
  `}
`;

export const TopLabel = styled.span`
  position: absolute;
  top: -7px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14px;
  padding: 0 6px;
  font-size: 10px;
  line-height: 1;
  font-weight: 600;
  color: ${Color.white};
  background-color: ${Color.primary};
  border-radius: 14px;
  transform: translateX(-50%);
  z-index: 2;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  padding: 0 14px;

  svg {
    display: block;
  }

  ${({ size }) =>
    size
      ? `
    position: absolute;
    top: 0;
    left: 0;
    width: 70px;
    height: 100%;
    
    svg {
      max-width: 40px;
      max-height: 44px;
    }
  `
      : `
    position: relative;
    width: 100%;
    height: 48px;
    
    svg {
      max-width: 100%;
      max-height: 100%;
    }
  `}
`;

export const Title = styled.h2`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ danger }) => (danger ? Color.danger : Color.primary)};
  font-weight: bold;

  ${({ size }) =>
    size
      ? `
    justify-content: flex-start;
    text-align: left;
  `
      : `
    justify-content: center;
    text-align: center;
  `}
`;

export const Description = styled.span`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  font-size: 10px;
  line-height: 14px;
  color: ${Color.black};

  ${({ size }) =>
    size
      ? `
    text-align: left;
  `
      : `
    text-align: center;
  `}
`;

export const LinkGov = styled.div`
  position: absolute;
  bottom: 8px;
  font-size: 10px;
  line-height: 14px;
  color: ${Color.primary};
  text-align: center;

  ${({ size }) =>
    size
      ? `
    right: 20px;
    width: auto;
  `
      : `
    left: 0;
    width: 100%;
  `}
`;

export const UrlLink = styled.a`
  display: block;
`;

export const Action = styled.div`
  display: block;
`;
