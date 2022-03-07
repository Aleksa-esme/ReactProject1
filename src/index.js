import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Message} from './Message';

import './index.css';

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [inputText, setInputText] = useState('');

  const inputValue = (e) => {
    setInputText(e.target.value);
  }

  const addMessage = () => {
    setMessageList([...messageList, {author: 'User', text: inputText}]);
    setInputText('');
  }

  return (
    <div>
        {messageList.map(message => (
          <React.Fragment key={message.id}>
            <p className="Message-text">Автор: {message.author}</p>
            <p className="Message-text">Текcт: {message.text}</p>
          </React.Fragment>
        ))}
        <form>
          <input onChange={inputValue} type='text' value={inputText} placeholder='Ваше сообщение...'></input>
          <button onClick={addMessage}>Отправить</button>  
        </form>  
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);


