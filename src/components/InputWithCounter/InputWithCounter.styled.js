import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

export const InputWithCounter = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap column;
  align-items: flex-start;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 2px 12px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ error }) => (error ? Color.danger : Color.lightGray)};
  font-size: 18px;
  line-height: 24px;
  color: ${({ error }) => (error ? Color.danger : Color.black)};
  letter-spacing: 0;
  -webkit-appearance: none;
  border-radius: 4px;
  ::-webkit-input-placeholder {
    font-size: 16px;
  }
  ::-moz-placeholder {
    font-size: 16px;
  }
  :-ms-input-placeholder {
    font-size: 16px;
  }
  :-moz-placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  color: ${Color.black};
`;

export const Information = styled.span`
  display: block;
  width: 100%;
  margin: 32px 0 0 0;
  font-size: 12px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.lightBlack};
`;
