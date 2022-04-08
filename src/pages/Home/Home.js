import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Avatar, Button, Tooltip, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export function Home() {
    const { image } = useSelector(state => state.profile);
    return (
        <>
            <Link to='/profile'>
                <Tooltip title="Profile">
                    <IconButton>
                        <Avatar src={image} sx={{ width: 156, height: 156 }} variant='circular' />
                    </IconButton>
                </Tooltip>
            </Link>
            
            <Link to='chat'>
                <Button variant="contained" endIcon={<SendIcon />}>Chats</Button>
            </Link>
        </>
    );
}