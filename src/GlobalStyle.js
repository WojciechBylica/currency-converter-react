import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`

${normalize}

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background-color: ${({ theme }) => theme.Body.QuillGray};
  background-image: ${({ theme }) => theme.Body.BodyBackgroundImage};
  background-repeat: no-repeat;
  background-position: top;
  font-family: 'Libre Franklin', sans-serif;
  padding: 10px;
  font-size: 16px;
}
`;