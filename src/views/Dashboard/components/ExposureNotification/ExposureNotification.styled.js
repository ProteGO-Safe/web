import styled from 'styled-components';
import { FontWeight } from '../../../../theme/fonts';
import { Color } from '../../../../theme/colors';

export const ExposureNotification = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  box-shadow: 0 6px 10px 0 ${Color.primaryLighter};
  overflow: hidden;
`;

export const Image = styled.div`
  position: absolute;
  right: 0;
  width: 122px;
  height: 122px;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 122px);
  padding: 20px 0 12px 38px;
`;

export const Text = styled.span`
  width: 100%;
  margin-bottom: 6px;
  font-size: 12px;
  line-height: 18px;
  color: ${Color.black};
`;

export const Link = styled.div`
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  font-size: 12px;
  line-height: 18px;
  color: ${Color.primary};
  font-weight: ${FontWeight.Bold};
  svg {
    display: block;
    width: 12px;
    height: 12px;
    margin-left: 6px;
    margin-top: -2px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  max-height: ${({ open }) => (open ? '9999px' : '0')};
  transition: max-height 0.4s cubic-bezier(0, 1, 0, 1) -0.1s;
  white-space: pre-line;
  overflow: hidden;
  ${({ open }) =>
    open &&
    `
      transition-timing-function: cubic-bezier(1, 0, 1, 0);
      transition-delay: 0s;
    `}
  > * {
    margin-bottom: 6px;
  }
`;

export const Title = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 20px;
  font-weight: ${FontWeight.Bold};
`;

export const Keys = styled.div`
  width: 100%;
  font-size: 10px;
  line-height: 14px;
  color: ${Color.gray_9};
  strong {
    color: ${Color.black};
  }
`;

export const KeysButton = styled(Keys)`
  color: ${Color.primary};
`;
