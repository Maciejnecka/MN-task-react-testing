import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
   --color-font: #333;
}

html{
   font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
   sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

body{
  background: linear-gradient(145deg, #e6e9f0 0%, #ffffff 100%);
  height: 200vh;
}
`;

export default GlobalStyles;
