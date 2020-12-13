import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';
import { ReactComponent as ContactIcon } from '../../assets/img/icons/icon-contact.svg';

export const Wrapper = styled.a`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  border: 1px solid ${Color.primary};
  border-radius: 4px;
  padding: 14px 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 60px);
  padding-right: 34px;
  font-size: 14px;
  line-height: 22px;
  color: ${Color.primary};
  font-weight: ${FontWeight.Bold};
`;

export const IconWrapper = styled(ContactIcon)`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  color: ${Color.primary};
  svg {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ArrowRight = styled.span`
  position: absolute;
  top: 50%;
  right: 14px;
  height: 12px;
  width: 12px;
  margin-top: -8px;
  color: ${Color.primary};
  z-index: 10;
  > svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
