import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  * {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
`;
