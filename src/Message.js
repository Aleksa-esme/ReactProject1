

export const Message = (props) => {
  return (
    <div className="Message">
      <header className="Message-header">
        <p className="Message-text">Автор: {props.author}</p>
        <p className="Message-text">Текcт: {props.text}</p>
      </header>
    </div>
  );
}

