import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif ;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 16px;
    box-sizing: border-box;
  }
`;

export default Global;
