import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate} from 'react-router-dom';
import { List, Button, Menu, MenuItem } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Chat }  from "./Chat";
import { createConversationFb, deleteConversation, conversationSelector } from "../../store/conversations";


export function ChatList() {
  const  { roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { conversations, pending } = useSelector(conversationSelector);

  const [anchorEl, setAnchorEl] = useState(null);
  const [roomName, setRoomName] = useState();
  
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    const roomUrl = event.currentTarget.parentNode.href;
    setRoomName(roomUrl.split('/').pop());
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const create = () => {
    const name = prompt('Введите название чата');
    const isValidName = !conversations.includes(name);

    if (!!name && isValidName) {
      dispatch(createConversationFb(name));
    } else {
      alert('Такой чат уже существует');
    }
  };

  const deleteChat = (conversation) => {
    dispatch(deleteConversation(conversation));
    navigate('/chat');
    setAnchorEl(null);
  };

  if (pending) {
    return <h1>pending ...</h1>;
  }

  return (
    <List component="nav">
      <Button 
      onClick={create}
      >create room
      </Button>
      
      {conversations.map((chat, index) => (
        <div key={index} style={{ display: "flex" }}>
          <Link to={`/chat/${chat}`} style={{ display: "flex" }}>
            <Chat title={chat} selected={roomId === chat} />
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
              <MenuItem onClick={() => deleteChat(roomName)}>
                <DeleteIcon />Delete
              </MenuItem>
            </Menu>
          </Link>
        </div>
      ))}
    </List>
  );
}