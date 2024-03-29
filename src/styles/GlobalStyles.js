import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
    ---bg: #2f2618;
    --orange: #ff9d01;
    --magenta: #FF005C;
    --gray-bg: #2b2b2c;
    --black: black;
    --btn-gradient: linear-gradient(45deg,#365899 0%,#992a09 35%,#a76c51 85%,#a76c51 100%);
    --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
  }

  html{
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background: black;
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    display:flex;
    width:100%;
    
  }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

`;
