import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from "@mui/material";
import { Header } from "./components";
import { Home, Profile, ChatPage } from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/chat/*" element={<ChatPage />}></Route>
            <Route path="*" element={ <h1>404</h1> }></Route>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
