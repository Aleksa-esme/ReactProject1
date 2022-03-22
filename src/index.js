import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from "@mui/material";
import App from './components/App/App'

import './global.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


