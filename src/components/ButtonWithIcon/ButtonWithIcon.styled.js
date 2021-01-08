import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

export const ButtonWithIcon = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  padding: 10px 30px 10px 14px;
  border-radius: 4px;
  border: 1px solid ${Color.primary};
  > svg {
    position: absolute;
    top: 50%;
    right: 8px;
    display: block;
    width: 12px;
    height: 12px;
    margin-top: -6px;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  > svg {
    width: 48px;
    height: 48px;
    margin-right: 10px;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 58px);
  font-size: 14px;
  line-height: 22px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.primary};
`;
