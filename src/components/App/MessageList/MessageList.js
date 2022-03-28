import cls from 'classnames';
import React from 'react';
import styles from './messageList.module.css';


export default function MessageList(props) {
    return (
        <ul>
            {props.messageList.map(( {author='User', text, id, date}) => (
                <li key={id} className={cls(styles.messageList, {
                    [styles.currentMessage]: author === "User",
                  }, [styles.message] )}
                >
                    <div>
                        <p>{author}: {text}</p>
                        <p>{date}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}