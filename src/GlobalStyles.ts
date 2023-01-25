import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:sans-serif;
  }

  html{
    font-size: 62.5%;
  }
  
  body{

  }
`;

export const MEDIA_QUERIES = {
  // 700px
  w44: '44rem',
  // 800px
  w50: '50rem',
  // 1024 px
  w64: '64rem',
  // 1200 px
  w85: '85rem',
};

export default GlobalStyles;
