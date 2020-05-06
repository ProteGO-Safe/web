import styled from 'styled-components';

export const SmileContainer = styled.div`
  grid-template-areas: 'name' 'text_wrapper';
  grid-template-rows: auto auto;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  grid-area: text_wrapper;
`;

export const UserName = styled.div`
  display: grid;
  grid-area: name;
  margin-bottom: 9px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  color: #1b1b1b;
`;

export const Text = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 132px);
  margin-right: 10px;
  p {
    font-size: 16px;
    line-height: 1.44;
    color: #1b1b1b;
  }
`;

export const IconSmile = styled.div`
  display: flex;
  width: 122px;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
