import { Global, css } from "@emotion/react";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,100&display=swap");

  * {
    box-sizing: border-box;
  }

  body,
  html {
    font-family: "Montserrat", sans-serif; /* Устанавливает шрифт Montserrat для всего тела документа */
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex: 1;
    height: 100%;
  }
`;

function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyles;
