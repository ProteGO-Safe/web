import styled from 'styled-components';

export const OnboardingWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 26px;
`;

export const Title = styled.h1`
  margin: 0 0 24px 0;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  color: #1b1b1b;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.44;
  color: #1b1b1b;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: 48px;
  margin-bottom: 44px;
  > * {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
