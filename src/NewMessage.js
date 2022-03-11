import React from "react";

export default function NewMessage(props) {
  return (
    <div className="Message">
      <header className="Message-header">
        <h3 className="Message-text">{props.text}</h3>
      </header>
    </div>
  );
}

