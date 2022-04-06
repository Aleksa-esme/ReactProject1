import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store/messages";
import cls from "classnames";
import styles from "./message.module.css";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const Message = memo(({ message, roomId }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={cls(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <div>
        <h3>{message.author}</h3>
        <p>{message.message}</p>
        <p>{message.date}</p>
      </div>
      <Button onClick={() => dispatch(deleteMessage(roomId, message?.id))}>
        <DeleteIcon />
      </Button>
    </div>
  );
});

//вызвать функцию delete и передать сюда нужную комнату и нужный id
