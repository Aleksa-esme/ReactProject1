import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate} from 'react-router-dom';
import { List, Button } from "@mui/material";
import  { Chat }  from "./Chat";
import { createConversation, deleteConversation, conversationSelector } from "../../store/conversations";

export function ChatList() {
  const  { roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const conversations = useSelector(conversationSelector);

  const create = () => {
    const name = prompt('Введите название чата');
    const isValidName = !conversations.includes(name);

    if (!!name && isValidName) { // !!-преобразование значения в его логический эквивалент; !!'строка' - true
      dispatch(createConversation(name));
    } else {
      alert('Такой чат уже существует');
    }
  };

  const deleteChat = (conversation) => {
    dispatch(deleteConversation(conversation));
    navigate('/chat');
  }

  return (
    <List component="nav">
      <Button onClick={create}>create room</Button>
      {conversations.map((chat, index) => (
        <div key={index} style={{ display: "flex" }}>
          <Button onClick={() => deleteChat(chat)}>X</Button>
          <Link to={`/chat/${chat}`}>
            <Chat title={chat} selected={roomId === chat} />
          </Link>
        </div>
      ))}
    </List>
  );
}