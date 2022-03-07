import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Message} from './Message';

import './index.css';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [inputText, setInputText] = useState('');


  

  const inputValue = (e) => {
    setInputText(e.target.value);
  }

  const addText = () => {
    addMessage('user0', inputText);
    setInputText('');
  }

  const addMessage = (user, text) => {
    setMessageList([...messageList, {author: user, text: text}]);
  }

  return (
    <div>
      <form>
        <input onChange={inputValue} type='text' text={inputText} placeholder='Ваше сообщение...'></input>
        <button onClick={addText}>Отправить</button>  
      </form>
      
        {messageList.map((message, index) => {
          return (<Message index={index + 1} author={message.author} text={message.text} />)})}
           
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


