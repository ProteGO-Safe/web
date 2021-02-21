import styled from 'styled-components';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap column;
  align-self: flex-start;
  width: 100%;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  min-height: 50px;
  padding: 10px 24px 10px 68px;
  font-size: 16px;
  font-weight: ${FontWeight.Bold};
  color: ${({ color }) => color || Color.primary};
  line-height: 20px;

  ${({ disable }) =>
    disable &&
    `
      pointer-events: none;
      opacity: 0.5;
    `}

  &:not(:last-child) {
    border-bottom: 1px solid ${Color.gray_10};
  }

  svg {
    position: absolute;
    top: 50%;
    left: 24px;
    display: block;
    max-width: 28px;
    max-height: 28px;
    margin-top: -14px;
  }

  @media (max-width: 300px) {
    padding: 10px 24px 10px 58px;
    font-size: 12px;
    line-height: 16px;

    svg {
      max-width: 24px;
      max-height: 24px;
      margin-top: -12px;
    }
  }
`;
