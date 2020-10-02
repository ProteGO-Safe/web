import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { hexToRgba } from '../../../../helpers/colors';

export const ImportantInfoItem = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 30px 10px 28px 10px;
  background: ${Color.gray_6};
  border-radius: 3px;
  box-shadow: 2px 2px 3px ${hexToRgba(Color.black, 0.26)};
  transition: all 0.1s ease-in;

  @media (max-height: 760px) {
    padding: 18px 10px 28px 10px;
  }

  @media (max-height: 580px) {
    padding: 14px 10px 28px 10px;
  }

  @media (max-height: 480px) {
    padding: 14px 6px 18px 6px;
  }

  &:active {
    box-shadow: inset 0 0 5px ${hexToRgba(Color.black, 0.26)};
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  height: 48px;

  @media (max-height: 740px) {
    height: 36px;
  }

  @media (max-height: 580px) {
    height: 32px;
  }

  @media (max-height: 520px) {
    height: 26px;
    margin-bottom: 6px;
  }
`;

export const Image = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ danger }) => (danger ? Color.danger : Color.primary)};
  font-weight: bold;
  text-align: center;

  @media (max-width: 300px) {
    font-size: 12px;
  }

  @media (max-height: 740px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media (max-height: 580px) {
    font-size: 13px;
    line-height: 17px;
    margin-bottom: 0;
  }

  @media (max-height: 560px) {
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 0;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  font-size: 10px;
  line-height: 14px;
  color: ${Color.black};
  text-align: center;
`;

export const LinkGov = styled.div`
  position: absolute;
  bottom: 9px;
  font-size: 10px;
  line-height: 1;
  color: ${Color.primary};
  text-align: center;

  @media (max-height: 480px) {
    bottom: 4px;
    font-size: 9px;
  }

  @media (max-width: 300px) {
    bottom: 4px;
    font-size: 8px;
  }
`;

export const UrlLink = styled.a`
  display: block;
`;
