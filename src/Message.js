import './Message.css';

export function Message(props) {
  return (
    <div className="Message">
      <header className="Message-header">
        <h3 className="Message-text">{props.text}</h3>
      </header>
    </div>
  );
}

