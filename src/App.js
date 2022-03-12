import React, {useState} from 'react';
import NewMessage from './NewMessage';
import MessageList from './MessageList';

export default function App() {
    const [newMessage, setNewMessage] = useState({});

    const handleChange = ({ target }) => {
        const {name, value} = target;
        setNewMessage((prev) => ({...prev, id: Date.now(), [name]: value}));
    };

    const[messageList, setMessageList] = useState([]);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (!newMessage.text) return;
        setMessageList((prev) => [newMessage, ...prev]);
        setNewMessage({});
    };

    return (
        <main>
            <h1>Сообщения</h1>
            <NewMessage 
                newMessage={newMessage}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <MessageList 
                messageList={messageList}
            />
        </main>
    );
}