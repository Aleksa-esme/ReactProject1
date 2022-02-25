import React from 'react';
import ReactDOM from 'react-dom';
import {Message} from './Message';

import './index.css';


const myText = <p>My name is Aleksa!</p>;




ReactDOM.render(
  <React.StrictMode>
    <Message text={myText}/>
  </React.StrictMode>,
  document.getElementById('root')
);


