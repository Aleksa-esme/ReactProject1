import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./Message";
import { useStyles } from "./use-styles";


export const MessageList = () => {
  const ref = useRef();
  const { roomId } = useParams();

  const [value, setValue] = useState("");
  const [messageList, setMessageList] = useState({});

  const styles = useStyles();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messageList]);

  const MessageContent = (author, message) => {
    setMessageList({...messageList, [roomId]: [ //...messageList-сохраняем все предыдущие значения для обновляемого объекта(сообщения всех комнат); roomId-обновляем конкретное св-во у объекта
      ...(messageList[roomId] ?? []), //...messageList[roomId]-сохранить сообщения этой комнаты; ?? [] - если пришел undefind, ставим пустой массив
      {
        author: author,
        message: message,
        date: new Date().toLocaleTimeString(),
      },
    ],})
  }

  const sendMessage = () => {
    if (value) {
      MessageContent('User', value);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage(value);
    }
  };

  useEffect(() => {
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        MessageContent('Bot', "Hi! It's bot...");
      }, 2000);
    }

    return () => { clearInterval(timerId)};
  }, [messageList, roomId] );
  
  const messages = messageList[roomId] ?? [];

  return (
    <>
      <div ref={ref}>
        {messages.map((message) => (
          <Message message={message} key={message.date} />
        ))}
      </div>

      <Input
        placeholder="Введите сообщение ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        className={styles.input}
        fullWidth
        endAdornment={
        <InputAdornment position="end">
          {value && <Send className={styles.icon} onClick={sendMessage} />}
        </InputAdornment>
        }
      />
    </>
  );
}