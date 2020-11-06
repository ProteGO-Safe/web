import styled from 'styled-components';

export const SwitcherWrapper = styled.div`
  display: flex;
  width: 100%;
  .MuiFormControlLabel-root {
    display: flex;
    flex-flow: wrap row-reverse;
    justify-content: space-between;
    align-items: center !important;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
  .MuiTypography-root {
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    color: #1b1b1b;
  }
`;
