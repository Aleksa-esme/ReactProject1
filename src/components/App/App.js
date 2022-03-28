import React, {useState, useEffect} from 'react';
import NewMessage from './MessageList/NewMessage/NewMessage';
import MessageList from './MessageList/MessageList';
import Template from './Template/Template';
import ChatList from './ChatList/ChatList';


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

    const handleKeyPress = (evt) => {
        if (evt.code === "Enter") {
            handleSubmit(evt);
        }
    };

    useEffect(() => {
        const botAnswer = 'Hi! It\'s bot...';
        const lastMessage = messageList[messageList.length - 1];
        let timerId = null;

        if(messageList.length > 0 && lastMessage.author !== 'Bot') {
            timerId = setTimeout(() => {
                setMessageList([...messageList, {author:'Bot', text:botAnswer, date: new Date().toLocaleDateString()}])
            }, 1500);
        }

        return () => clearInterval(timerId);
    }, [messageList])

    return (
        <main>
            <Template
                messageList={<MessageList 
                                messageList={messageList}
                            />}
                chats={<ChatList />}           
                messages={<NewMessage 
                            newMessage={newMessage}
                            handleChange={handleChange}
                            handleKeyPress={handleKeyPress}
                            handleSubmit={handleSubmit}
                        />}
            />
        </main>
    );
}