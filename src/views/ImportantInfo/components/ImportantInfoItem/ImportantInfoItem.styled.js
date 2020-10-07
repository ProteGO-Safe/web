import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { hexToRgba } from '../../../../helpers/colors';

export const ImportantInfoItem = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
  height: 100%;
  padding: 1.2rem 0.35rem 1.2rem 0.35rem;
  background: ${Color.gray_6};
  border-radius: 4px;
  box-shadow: 2px 2px 3px ${hexToRgba(Color.black, 0.26)};
  transition: all 0.1s ease-in;

  @media (max-width: 374px) {
    align-items: center;
    margin-bottom: 12px;
    padding: 1.2rem 0.6rem 1.2rem 0.6rem;
  }
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
  @media (max-width: 374px) {
    width: 2.4em;
    height: 100%;
    margin-right: 0.6rem;
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: auto;
  height: 100%;
  @media (max-width: 374px) {
    width: 100%;
    height: 2.4em;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  @media (max-width: 374px) {
    width: calc(100% - 2.4em - 0.6rem);
  }
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
  @media (max-width: 374px) {
    justify-content: flex-start;
    margin-bottom: 0;
    padding-right: 1.3rem;
    text-align: left;
  }
  @media (max-width: 320px) {
    padding-right: 0;
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
  @media (max-width: 374px) {
    justify-content: flex-start;
    margin-top: 0.4em;
    padding-right: 2rem;
    text-align: left;
  }
  @media (max-width: 320px) {
    padding-right: 0;
  }
`;

export const LinkGov = styled.div`
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  font-size: 0.5em;
  line-height: 1em;
  color: ${Color.primary};
  text-align: center;
  @media (max-width: 374px) {
    padding: 0 0.5rem;
    font-size: 10px;
    line-height: 1;
    text-align: right;
  }
`;

export const UrlLink = styled.a`
  display: block;
`;
