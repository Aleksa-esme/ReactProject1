import React from "react";

export default function NewMessage(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <p>{props.newMessage.author}</p>
      <input 
        name="text"
        placeholder="Введите сообщение"
        value={props.newMessage.text || ''}
        onChange={props.handleChange}
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

