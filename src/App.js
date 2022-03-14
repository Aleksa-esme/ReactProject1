import React, {useState, useEffect} from 'react';
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
        setMessageList((prev) => [...prev, newMessage]);
        setNewMessage({});
    };

    useEffect(() => {
        const botAnswer = 'Hi! It\'s bot...';
        const lastMessage = messageList[messageList.length - 1];
        let timerId = null;

        if(messageList.length > 0 && lastMessage.author !== 'Bot') {
            timerId = setTimeout(() => {
                setMessageList([...messageList, {author:'Bot', text:botAnswer}])
            }, 1500);
        }

        return () => clearInterval(timerId);
    }, [messageList])

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