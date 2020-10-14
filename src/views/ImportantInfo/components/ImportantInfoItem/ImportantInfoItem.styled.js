import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { hexToRgba } from '../../../../helpers/colors';
import { FONT_SIZE } from '../../../../hooks/useFontScale/fontScale.constants';

const handleFontSize = size => {
  switch (size) {
    case FONT_SIZE.SMALL:
      return '16px';
    case FONT_SIZE.NORMAL:
      return '18px';
    case FONT_SIZE.LARGE:
      return '18px';
    case FONT_SIZE.EXTRA_LARGE:
      return '18px';
    case FONT_SIZE.HUGE:
      return '18px';
    default:
      return '18px';
  }
};

export const ImportantInfoItem = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
  height: 100%;
  padding: 1.5rem 0.5rem;
  background: ${Color.gray_6};
  border-radius: 4px;
  box-shadow: 2px 2px 3px ${hexToRgba(Color.black, 0.26)};
  transition: all 0.1s ease-in;

  font-size: ${({ size }) => handleFontSize(size)}!important;

  @media (max-width: 374px) {
    align-items: center;
    margin-bottom: 12px;
    padding: 1.5rem 0.6rem;
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
    margin-right: 0.75rem;
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
    width: calc(100% - 2.4em - 0.75rem);
  }
`;

export const Title = styled.h2`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0.4em;
  font-size: 1em !important;
  line-height: 1.2em !important;
  color: ${({ danger }) => (danger ? Color.danger : Color.primary)};
  font-weight: bold;
  text-align: center;
  @media (max-width: 374px) {
    justify-content: flex-start;
    margin-bottom: 0;
    text-align: left;
  }
  @media (max-width: 320px) {
    padding-right: 0;
  }
  @media (min-height: 812px) {
    line-height: 1.4em;
  }
`;

export const Description = styled.span`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  font-size: 0.556em !important;
  line-height: 1.4em !important;
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
  font-size: 0.556em !important;
  line-height: 1em !important;
  color: ${Color.primary};
  text-align: center;
  @media (max-width: 374px) {
    padding: 0 0.5rem;
    font-size: 10px !important;
    line-height: 1;
    text-align: right;
  }
`;

export const UrlLink = styled.a`
  display: block;
`;
