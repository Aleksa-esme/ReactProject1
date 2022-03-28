import React from "react";
import { Input, InputAdornment } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useStyles } from './use-styles';


export default function NewMessage(props) {
  const styles = useStyles();
  return (
    <>
      <p>{props.newMessage.author}</p>
      <Input 
        name="text"
        placeholder="Введите сообщение"
        value={props.newMessage.text || ''}
        onChange={props.handleChange}
        onKeyPress={props.handleKeyPress}
        className={styles.input}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <Send className={styles.icon} onClick={props.handleSubmit} />
          </InputAdornment>
        }
      />
    </>
  );
}

