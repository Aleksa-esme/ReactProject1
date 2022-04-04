import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate} from 'react-router-dom';
import { List, Button } from "@mui/material";
import  { Chat }  from "./Chat";
import { createConversation, deleteConversation, conversationSelector } from "../../store/conversations";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function ChatList() {
  const  { roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const conversations = useSelector(conversationSelector);

  const [anchorEl, setAnchorEl] = useState(null);
  const [parentDiv, setParentDiv] = useState();
  
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setParentDiv(event.currentTarget.parentNode);
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    setAnchorEl(null);
    navigate('/chat');
  }

  return (
    <List component="nav">
      <Button 
      onClick={create}
      endIcon={<KeyboardArrowDownIcon />}
      >create room
      </Button>
      
      {conversations.map((chat, index) => (
        <div key={index} style={{ display: "flex" }}>
          
          <Link to={`/chat/${chat}`}>
            <Chat title={chat} selected={roomId === chat} />
          </Link>
          
          <Button 
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleClick}
          ></Button>
          
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <EditIcon />Edit name
            </MenuItem>
            <MenuItem onClick={() => deleteChat(parentDiv.firstChild.textContent)}>{/* сделано крайне по-дурацки. Как переделать? */}
              <DeleteIcon />Delete
            </MenuItem>
          </Menu>
        </div>
      ))}
    </List>
  );
}