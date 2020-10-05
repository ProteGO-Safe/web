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
  padding: 1.2rem 0.35rem 1.2rem 0.35rem;
  background: ${Color.gray_6};
  border-radius: 4px;
  box-shadow: 2px 2px 3px ${hexToRgba(Color.black, 0.26)};
  transition: all 0.1s ease-in;

  @media (min-width: 240px) {
    font-size: 15px;
  }
  @media (min-width: 360px) {
    font-size: 16px;
  }
  @media (min-width: 375px) {
    font-size: 20px;
  }
  @media (min-width: 600px) {
    font-size: 22px;
  }
  @media (min-width: 800px) {
    font-size: 24px;
  }

  @media (min-height: 568px) {
    font-size: 15px;
  }
  @media (min-height: 616px) {
    font-size: 16px;
  }
  @media (min-height: 667px) {
    font-size: 18px;
  }
  @media (min-height: 812px) {
    font-size: 20px;
  }
  @media (min-height: 960px) {
    font-size: 22px;
  }

  &:active {
    box-shadow: inset 0 0 5px ${hexToRgba(Color.black, 0.26)};
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5em;
  width: 100%;
  height: 2.4em;
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
  margin-bottom: 0.4em;
  font-size: 1em;
  line-height: 1.2em;
  color: ${({ danger }) => (danger ? Color.danger : Color.primary)};
  font-weight: bold;
  text-align: center;
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
  bottom: 8px;
  font-size: 0.5em;
  line-height: 1em;
  color: ${Color.primary};
  text-align: center;
`;

export const UrlLink = styled.a`
  display: block;
`;
