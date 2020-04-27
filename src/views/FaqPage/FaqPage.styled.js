import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  color: #1b1b1b;
`;

export const FaqWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
`;

export const FaqIntro = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.57;
  color: #1b1b1b;
`;

export const FaqTitle = styled.h2`
  margin-top: 26px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  color: #1b1b1b;
  + p {
    margin-top: 0;
  }
`;

export const FaqSubtitle = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.57;
  color: #1b1b1b;
`;

export const FaqUppercase = styled.p`
  margin-top: 32px;
  margin-bottom: 18px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.43;
  color: #1b1b1b;
`;

export const FaqParagraph = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.57;
  color: #1b1b1b;
`;

