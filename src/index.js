import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList, Template, ChatList, Header } from "./components";

import './global.css';

const App = () => {
  return (
    <>
      <Template
        messages={<MessageList />}
        chats={<ChatList />}
        header={<Header />}
      />
    </>
  );
};

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
