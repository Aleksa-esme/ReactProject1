import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { MessageList, Template, ChatList } from "../../components";
import { getConversations } from "../../store/conversations";
import { getMessages } from "../../store/messages";

export const ChatPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        const listener = ({code}) => {
            if (code === 'Escape') {
                navigate('/chat');
            }
        };
        document.addEventListener('keydown', listener)

        return () => {
            document.removeEventListener('keydown', listener)
        }
    }, [navigate]);

    useEffect(() => {
        dispatch(getConversations());
        dispatch(getMessages());
    }, [dispatch]);
    
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <Template messages={<h1>Choose chat</h1>} chats={<ChatList />} />
                    }>
                </Route>
            </Routes>
            <Routes>
                <Route path=':roomId' element={
                    <Template messages={<MessageList />} chats={<ChatList />} />
                    }>
                </Route>
            </Routes>
        </>
    );
}