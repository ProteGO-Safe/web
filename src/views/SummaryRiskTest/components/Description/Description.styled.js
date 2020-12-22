import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: 40px;
  margin-bottom: auto;
  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default Description;
