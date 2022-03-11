import React from 'react';

export default function MessageList(props) {
    return (
        <ul>
            {props.messageList.map(( {author, text, id}) => (
                <li key={id}>
                    <div>
                        <h3>{author}</h3>
                        <h4>{text}</h4>
                    </div>

                </li>
            ))}
        </ul>
    );
}