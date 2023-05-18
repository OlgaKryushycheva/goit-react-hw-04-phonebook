import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from 'components/App';
import { GlobalStyles } from 'Styles/GlobalStyle';
import { theme } from './Styles/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  </React.StrictMode>
);
