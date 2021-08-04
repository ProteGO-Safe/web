import styled from 'styled-components';
import { Color } from '../../../../theme/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  background-color: ${({ color }) => color};
  border-radius: 4px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${Color.white};
  text-align: center;
  padding: 29px 40px 16px;
`;

export const Content = styled.div`
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ContentText = styled.div`
  font-size: 16px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 17px;
`;
