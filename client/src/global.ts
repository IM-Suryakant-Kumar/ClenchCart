import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #ebf2fa;
    --color-secondary: #cae9ff;
    --color-logo: #3a86ff;
    --font-cinzel: "Cinzel", serif;
    --font-exo: "Exo 2", sans-serif;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-exo);
  }
`;

export default GlobalStyle;
