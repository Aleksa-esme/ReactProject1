import React, {useState} from 'react';
import NewMessage from './NewMessage';
import MessageList from './MessageList';

export default function App() {
    const [newMessage, setNewMessage] = useState({});

    const[messageList, setMessageList] = useState([]);

    return (
        <main>
            <h1>Messages</h1>
            <NewMessage 
                newMessage={newMessage}
            />
            <MessageList 
                messageList={messageList}
            />
        </main>
    )
}