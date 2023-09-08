import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bevan:ital@0;1&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior:  snooth;

  }
  button {
    all: unset;
  }

  button:focus {
    outline: revert;
  }

  a{
    all: unset;
  }

  html {

    @media (max-width: 1280) {
      font-size: 93.75%;
    }

    @media (max-width:720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  





  ul {
    list-style: none
  } 

  

`