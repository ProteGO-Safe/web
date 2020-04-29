import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 24px;
  color: #1b1b1b;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 26px;
`;

export const Paragraph1 = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #1b1b1b;
`;

export const Paragraph2 = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.36;
  color: #1b1b1b;
`;

export const WarningContent = styled.div`
  margin-top: 24px;
  margin-bottom: 36px;
  padding: 14px 14px 20px 14px;
  border-radius: 2px;
  border: solid 1px #b7b7b7;
  + .fieldset {
    margin-top: auto;
    margin-bottom: 24px;
  }
`;

export const WarningLabel = styled.h3`
  display: inline-flex;
  align-items: center;
  width: 100%;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.7;
  color: #d5233f;
  img {
    display: block;
    width: 35px;
    height: 35px;
    margin-right: 6px;
  }
`;

export const WarningList = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

export const WarningListItem = styled.li`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.36;
  color: #1b1b1b;
  &:last-child {
    margin-bottom: 0;
  }
  strong {
    font-weight: bold;
  }
`;
