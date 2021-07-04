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
  background-repeat: no-repeat;
  background-position: top; 
  background-color: ${({ theme }) => theme.BackgroundColor.Melrose};
  font-family: 'Libre Franklin', sans-serif;
  padding: 10px;
  font-size: 16px;
}
`;