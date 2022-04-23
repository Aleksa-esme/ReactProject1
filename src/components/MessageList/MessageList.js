import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";

import { useStyles } from "./use-styles";

import { Message } from "./Message";
import { createMessageFb, messagesSelector } from "../../store/messages";

export const MessageList = () => {
  const ref = useRef();
  const { roomId } = useParams();
  const dispatch = useDispatch();

  const selector = useMemo(() => messagesSelector(roomId), [roomId]); //useMemo-вызывается и возвращает старое значение. Если roomId не изменен, useMemo вернет старое значение результата выбора функции
  const messages = useSelector(selector);

  const [value, setValue] = useState("");

  const styles = useStyles();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(createMessageFb(roomId, { author: author || 'Bot', message }));
        setValue("");
      }
    }, [roomId, dispatch]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        send("Hi! It's bot...", 'Bot');
      }, 2000);
    }

    return () => { clearInterval(timerId)};
  }, [messages, roomId, send]);
  
  return (
    <>
      <div ref={ref}>
        {messages.map((message) => (
          <Message message={message} key={message.date} roomId={roomId} />
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
          {value && <Send className={styles.icon} onClick={() => send(value)} />}
        </InputAdornment>
        }
      />
    </>
  );
}