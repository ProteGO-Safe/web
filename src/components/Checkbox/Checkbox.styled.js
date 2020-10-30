import styled from 'styled-components';
import { Color } from '../../theme/colors';

import Icon from '../../assets/img/icons/check-white.svg';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  top: -999px;
  left: -999px;
  display: none;
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
  &:checked + label {
    &:before {
      border-color: ${Color.primary};
      background-color: ${Color.primary};
    }
    &:after {
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: auto;
  padding-left: 52px;
  padding-right: ${({ hasContent }) => hasContent && '24px'};

  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    width: 16px;
    height: 16px;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ error }) => (error ? Color.danger : Color.lightGray)};
    border-radius: 4px;
    background-color: ${Color.white};
    transition: all 0.2s;
    z-index: 1;
  }
  &:after {
    content: '';
    position: absolute;
    top: 6px;
    left: 4px;
    width: 12px;
    height: 12px;
    background-image: url(${Icon});
    background-position: center;
    background-size: 100%;
    opacity: 0;
    z-index: 10;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: ${Color.lightBlack};
`;
