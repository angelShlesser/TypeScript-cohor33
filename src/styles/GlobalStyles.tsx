import { Global, css } from "@emotion/react";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,100&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

  * {
    box-sizing: border-box;
  }

  body,
  html {
    //font-family: "Montserrat", sans-serif; /* Устанавливает шрифт Montserrat для всего тела документа */
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
