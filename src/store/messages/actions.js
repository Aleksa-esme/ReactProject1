import { 
    SEND_MESSAGE, 
    DELETE_MESSAGE, 
    GET_MESSAGES_START, 
    GET_MESSAGES_SUCCESS, 
    GET_MESSAGES_ERROR,
    CREATE_MESSAGES_START,
    CREATE_MESSAGES_SUCCESS,
    CREATE_MESSAGES_ERROR,
} from "./types";

/* actionCreator */

export const sendMessage = (roomId, message) => {
    return { type: SEND_MESSAGE, payload: { roomId, message }, meta: { delay: 10 }, };
};

export const deleteMessage = (roomId, messageId) => {
    return { type: DELETE_MESSAGE, payload: { roomId, messageId } }
};

export const getMessagesStart = () => {
    return { type: GET_MESSAGES_START };
};

export const getMessagesSuccess = (message) => {
    return { type: GET_MESSAGES_SUCCESS, payload: message }
};

export const getMessagesError = (e) => {
    return { type: GET_MESSAGES_ERROR, payload: e }
};

export const sendMessagesStart = () => {
    return { type: CREATE_MESSAGES_START };
};
  
export const sendMessagesSucess = (message, roomId) => {
    return { type: CREATE_MESSAGES_SUCCESS, payload: { message, roomId } };
};
  
export const sendMessagesError = (e) => {
    return { type: CREATE_MESSAGES_ERROR,payload: e };
};