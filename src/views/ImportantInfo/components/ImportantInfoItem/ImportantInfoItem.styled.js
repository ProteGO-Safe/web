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
  padding: 1.5rem 0.5rem;
  background: ${Color.gray_6};
  border-radius: 4px;
  box-shadow: 2px 2px 3px ${hexToRgba(Color.black, 0.26)};
  transition: all 0.1s ease-in;

  font-size: 18px;

  ${({ size }) =>
    size &&
    `
    align-items: center;
    margin-bottom: 12px;
    padding: 1.5rem 1rem;
  `}

  &:active {
    box-shadow: inset 0 0 5px ${hexToRgba(Color.black, 0.26)};
  }
`;

export const Badge = styled.span`
  position: absolute;
  right: 8px;
  padding: 4px 6px;
  font-size: 0.5em;
  line-height: 0.7em;
  color: ${Color.primary};
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid ${Color.primary};
  @media (max-width: 374px) {
    bottom: 8px;
  }
  @media (min-width: 375px) {
    top: 8px;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5em;
  width: 100%;
  height: 2.4em;
  ${({ size }) =>
    size &&
    `
    width: 2.4em;
    height: 100%;
    margin-right: 0.75rem;
    margin-bottom: 0;
  `}
  svg {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  ${({ size }) =>
    size &&
    `
    width: calc(100% - 2.4em - 0.75rem);
  `}
`;

export const Title = styled.h2`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0.4em;
  font-size: 1em;
  line-height: 1.2em;
  color: ${({ danger }) => (danger ? Color.danger : Color.primary)};
  font-weight: bold;
  text-align: center;
  ${({ size }) =>
    size &&
    `
    justify-content: flex-start;
    margin-bottom: 0;
    text-align: left;
  `}
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
  font-size: 0.556em;
  line-height: 1.4em;
  color: ${Color.black};
  text-align: center;

  @media (max-width: 320px) {
    padding-right: 0;
  }

  ${({ size }) =>
    size &&
    `
    justify-content: flex-start;
    margin-top: 0.4em;
    padding-right: 2rem;
    text-align: left;
  `}
`;

export const LinkGov = styled.div`
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  font-size: 0.556em;
  line-height: 1em;
  color: ${Color.primary};
  text-align: center;
  ${({ size }) =>
    size &&
    `
    padding: 0 0.5rem;
    font-size: 10px;
    line-height: 1;
    text-align: right;
  `}
`;

export const UrlLink = styled.a`
  display: block;
`;

export const Action = styled.div`
  display: block;
`;
