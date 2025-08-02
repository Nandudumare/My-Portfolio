import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext';
import muiTheme from './theme/muiTheme';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={muiTheme}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </ThemeProvider>
);

reportWebVitals();
