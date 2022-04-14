import React, { useEffect, useState } from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { onAuthStateChanged } from 'firebase/auth';
import { ThemeProvider, createTheme } from "@mui/material";

import { Header, PrivateRoute, PublicRoute } from "./components";
import { Home, Profile, ChatPage, Gists, Cats, LoginPage, SignUpPage } from "./pages";
import { store, persistor } from './store';
import { auth } from "./api/firebase";

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

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const isAuth = !!session;

  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header session={isAuth} />
              <Routes>
                <Route path="/" 
                element={
                  <PrivateRoute isAuth={isAuth} to="/login">
                    <Home />
                  </PrivateRoute>} 
                />
                <Route path="/profile" 
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <Profile />
                  </PrivateRoute>} 
                />
                <Route path="/chat/*" 
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <ChatPage />
                  </PrivateRoute>} 
                />
                <Route path="/gists" 
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <Gists />
                  </PrivateRoute>} 
                />
                <Route path="/cats" 
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <Cats />
                  </PrivateRoute>} 
                />
                <Route path="/login"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route path="/sign-up"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <SignUpPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={ 
                <h1>404</h1> 
              } />
              </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

root.render(
   <App />
);
