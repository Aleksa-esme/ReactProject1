import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from 'react';
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import { Header } from "./components";
import { Home, Profile, ChatPage } from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store';

import './global.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const theme = createTheme({
  palette: {
    primary: {
      light: '#6746c3',
      main: '#311b92',
      dark: '#000063',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffb3',
      main: '#ffe082',
      dark: '#caae53',
      contrastText: '#000',
    },
  },
});

root.render(
  <StrictMode>
    <Provider store={store}>
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
    </Provider>
  </StrictMode>
);
