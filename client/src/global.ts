import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #f3f9fb;
    --secondary-color: #008ecc;
    --gray-color: #666666;
    --fashion-color: #f3f3f3;
    --custom-white: #fdfffc;
    --dark-blue: #a9bcd0;
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
