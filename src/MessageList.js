import React from 'react';

export default function MessageList(props) {
    return (
        <ul>
            {props.messageList.map(( {author='User', text,id}) => (
                <li key={id}>
                    <div>
                        <p>{author}: {text}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}