/* prettier-ignore */

import {createGlobalStyle} from "styled-components"
import Reset from "./Reset";

const GlobalStyle = createGlobalStyle`
  ${Reset};

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"
  }

a {
  text-decoration: none;
  color: inherit;
}

`;

export default GlobalStyle;
