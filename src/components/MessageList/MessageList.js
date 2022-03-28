import { useState, useEffect, useRef } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./Message";
import { useStyles } from "./use-styles";


export const MessageList = () => {
  const ref = useRef();

  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const styles = useStyles();

  const sendMessage = () => {
    if (value) {setMessages([...messages,
        {
          author: "User",
          message: value,
          date: new Date().toLocaleTimeString(),
        },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessages.author === "User") {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: "Bot",
            message: "Hi! It's bot...",
            date: new Date().toLocaleTimeString(),
          },
        ]);
      }, 2000);
    }

    return () => { clearInterval(timerId)};
  }, [messages] );
  
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