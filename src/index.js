import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ResetStyles from './styles/css/Reset';
import GlobalStyles from './styles/css/Global';
import GlobalFonts from './styles/css/fonts/GlobalFonts';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/css/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      <GlobalFonts />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
