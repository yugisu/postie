import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Comfortaa|Roboto:400,700&display=swap&subset=cyrillic');

  html {
    box-sizing: border-box;

    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: #eee;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::selection {
    background-color: #ffb700;
  }
`;

export const Container = styled.div`
  min-height: 100vh;

  padding: 5rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
