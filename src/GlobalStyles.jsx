// GlobalStyles.jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #f0f2f5;
    color: #333;
    margin: 0 40px;
  }

  a {
    color: inherit;
    
  &:hover {
    color: #61dafb;
  }
  }

  ul {
       flex-direction: column;
   display: flex;
   justify-content: center;
   align-items: center;
    list-style: none;
    list-style: none;
    padding: 0;
  }


  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


`;

export default GlobalStyles;
