import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

import { ReactComponent as IconFlagUE } from '../../assets/img/icons/flag-ue.svg';

export const WarningInEuropeTerm = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: flex-start;
  width: 100%;
  margin: 22px 0;
  border-top: 1px solid ${Color.gray_1};
  border-bottom: 1px solid ${Color.gray_1};
`;

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 338px;
  margin: 0 auto;
  @media (max-width: 320px) {
    max-width: 290px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  width: auto;
  padding: 8px 0;
`;

export const Flag = styled(IconFlagUE)`
  display: block;
  width: 37px;
  height: 25px;
  margin-right: 20px;
`;

export const Label = styled.span`
  width: calc(100% - 57px);
  font-size: 14px;
  line-height: 22px;
  font-weight: ${FontWeight.Normal};
`;

export const TermDescription = styled.div`
  display: flex;
  flex-flow: wrap row;
  max-height: ${({ open }) => (open ? '9999px' : '0')};
  width: 100%;
  padding: ${({ open }) => (open ? '22px 0' : '0')};
  border-width: ${({ open }) => (open ? '1px 0 0 0' : '0')};
  border-style: solid;
  border-color: ${Color.gray_1};
  font-size: 12px;
  line-height: 18px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.black};
  transition: padding ${({ open }) => (open ? '0.1s' : '0.5s')},
    max-height 0.4s cubic-bezier(0, 1, 0, 1) -0.1s;
  overflow: hidden;

  ${({ open }) =>
    open &&
    `
      transition-timing-function: cubic-bezier(0.5, 0, 1, 0); 
      transition-delay: 0s;
    `}
`;

export const Link = styled.span`
  display: inline;
  color: ${Color.primary};
`;
