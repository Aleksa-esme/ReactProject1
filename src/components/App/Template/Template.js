import styles from "./template.module.css";

export default function Template({ messageList, messages, chats }) {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.chats}>{chats}</div>
        <div className={styles.messages}>{messageList}</div>
      </div>
      <div>{messages}</div>
    </div>
  );
}