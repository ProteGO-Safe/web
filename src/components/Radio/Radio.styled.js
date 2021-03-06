import styled from 'styled-components';
import { Color } from '../../theme/colors';

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

export const Radio = styled.input`
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
    }
    &:after {
      background-color: ${Color.primary};
    }
  }
`;

export const Label = styled.label`
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
    border-radius: 50%;
    background-color: ${Color.white};
    transition: all 0.2s;
  }
  &:after {
    content: '';
    position: absolute;
    top: 7px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${Color.white};
    transition: all 0.2s;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: ${Color.lightBlack};
`;
