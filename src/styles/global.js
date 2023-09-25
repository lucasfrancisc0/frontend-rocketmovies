import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  };


  :root {
    font-size: 62.5%;
  };


  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color:  ${({ theme }) => theme.COLORS.WHITE};
  };


  body, button, input, text-area {
    font-family: Roboto Slab;
    font-weight: 400;
    font-size: 1.6rem;
  };

  a {
    text-decoration: none;
  };


  button, a {

    cursor: pointer;
    transition: filter 0.2s;
  };
`;