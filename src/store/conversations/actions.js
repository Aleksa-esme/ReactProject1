import { CREATE_CONVERSATION, GET_CONVERSATIONS_START, GET_CONVERSATIONS_SUCCESS, GET_CONVERSATIONS_ERROR } from "./types";
import { DELETE_CONVERSATION } from '../types'

/* actionCreator */

export const createConversation = (conversation) => {
    return { type: CREATE_CONVERSATION, payload: conversation };
};

export const deleteConversation = (conversation) => {
    return { type: DELETE_CONVERSATION, payload: conversation };
};

export const getConversationsStart = () => {
    return { type: GET_CONVERSATIONS_START };
};

export const getConversationsSuccess = (conversations) => {
    return { type: GET_CONVERSATIONS_SUCCESS, payload: conversations }
};

export const getConversationsError = (e) => {
    return { type: GET_CONVERSATIONS_ERROR, payload: e }
};
