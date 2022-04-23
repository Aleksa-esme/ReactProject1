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
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(undefined);
      }
    });
  }, []);

  // const isAuth = !!currentUser;

  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header currentUser={currentUser} />
              <Routes>
                <Route path="/" 
                element={
                  <PrivateRoute isAuth={currentUser} to="/login">
                    <Home />
                  </PrivateRoute>
                  } 
                />
                <Route path="/profile" 
                element={
                  <PrivateRoute isAuth={currentUser}>
                    <Profile />
                  </PrivateRoute>
                  } 
                />
                <Route path="/chat/*" 
                element={
                  <PrivateRoute isAuth={currentUser}>
                    <ChatPage />
                  </PrivateRoute>
                  } 
                />
                <Route path="/gists" 
                element={
                  <PrivateRoute isAuth={currentUser}>
                    <Gists />
                  </PrivateRoute>
                  } 
                />
                <Route path="/cats" 
                element={
                  <PrivateRoute isAuth={currentUser}>
                    <Cats />
                  </PrivateRoute>
                  } 
                />
                <Route path="/login"
                element={
                  <PublicRoute isAuth={currentUser}>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route path="/sign-up"
                element={
                  <PublicRoute isAuth={currentUser}>
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
