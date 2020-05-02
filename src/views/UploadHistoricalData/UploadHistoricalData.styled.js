import styled from 'styled-components';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';

export const Name = styled.h1`
  font-size: 20px;
  font-weight: ${FontWeight.Bold};
  line-height: 1.5;
  color: ${Color.lightBlack};
`;

export const PinWrapper = styled.div`
  display: flex;
  width: 100%;
  .pincode-input-container {
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    width: 100%;
    input {
      width: 44px !important;
      height: 44px !important;
      margin: 0 !important;
      border-radius: 4px;
      font-size: 16px;
      font-weight: ${FontWeight.Normal};
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      color: ${Color.black};
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: auto;
  margin-bottom: 24px;
`;

export const SuccessInfo = styled.div`
  display: block;
  width: 100%;
  p {
    margin-bottom: 10px !important;
    &:last-child {
      margin-bottom: 0 !important;
    }
  }
`;
