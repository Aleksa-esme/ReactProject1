

export function Message(props) {
  return (
    <div className="Message">
      <header className="Message-header">
        <p className="Message-text">Сообщение №{props.index}</p>
        <p className="Message-text">Автор: {props.author}</p>
        <p className="Message-text">Тескт: {props.text}</p>
      </header>
    </div>
  );
}

