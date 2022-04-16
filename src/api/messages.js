import { child, ref, get, push } from "firebase/database";
import { database } from "./firebase";

export const createMessageApi = (message, roomId) => {
  return push(child(ref(database), `conversations/${roomId}/messages`), message);
};

export const getMessagesApi = () => {
  return get(child(ref(database), `conversations/messages`));
};