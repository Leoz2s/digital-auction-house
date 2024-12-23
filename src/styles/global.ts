import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }
  
  a, button {
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  button:hover, a:hover {
    filter: brightness(0.9);
  }
  
  body {
    background-color: ${({theme}) => theme.COLORS.LIGHT._100 };
  }
`;