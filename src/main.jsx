import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { Routes } from './routes';

import { authProvider } from './hooks/auth';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={theme} >
      <GlobalStyles />


      <authProvider>
        <Routes />
      </authProvider>
      

    </ThemeProvider>

  </React.StrictMode>,
);
