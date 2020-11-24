import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

export const RatingAppModalFooter = styled.div`
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  width: 100%;
  min-height: 50px;
  border-top: 1px solid ${Color.gray_1};
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 50px;
  font-size: 16px;
  font-weight: ${FontWeight.Bold};
  line-height: 24px;
  color: ${Color.primary};
  text-transform: uppercase;
  &:not(:last-child) {
    border-right: 1px solid ${Color.gray_1};
  }
`;
