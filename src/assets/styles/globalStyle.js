import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
  }

  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
