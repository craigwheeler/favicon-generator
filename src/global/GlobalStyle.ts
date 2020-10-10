import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');
  }

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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

`;
