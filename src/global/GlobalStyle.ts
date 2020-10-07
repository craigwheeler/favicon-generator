import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  html {
   box-sizing: border-box;
   height: 100%;
   width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 500;
    background: #fff;
    overflow-x: hidden;
    max-width: 100%;
  }

  h1 {
    font-size: 22px;
  }

`;
