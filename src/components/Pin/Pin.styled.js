import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';
import { SubTitle } from '../../views/LabTest/LabTest.styled';

export const Pin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: -24px -18px 0;
  padding: 10px 24px 20px;
  border-radius: 4px;
  background-color: ${Color.primaryLighter};
  
  & + .fieldset {
    margin-top: 24px;
  }
  
  .pincode-input-container {
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    width: 100%;
    
    input {
      width: 46px !important;
      height: 46px !important;
      margin: 0 !important;
      border-radius: 4px;
      font-size: 18px;
      font-weight: ${FontWeight.Normal};
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      color: ${Color.black};
      background: ${Color.white} !important;
      border: 1px solid ${Color.white} !important;
      
      &:focus {
        border: 1px solid ${Color.primary} !important;
      }
      
      @media (max-width: 330px) {
        width: 42px !important;
        height: 42px !important;
      }
    }
`;

export const PinTitle = styled(SubTitle)`
  color: ${Color.primary};
  text-align: center;
  margin-bottom: 16px !important;
`;
