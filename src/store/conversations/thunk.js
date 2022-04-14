import { getConversationsStart, getConversationsSuccess, getConversationsError } from "./actions";

export const getConversations = () => async (dispatch, _, api) => {
    const conversations = [];
    
    try {
        dispatch(getConversationsStart());

        const snapshot = await api.getConversationApi();

        //нормализация данных
        snapshot.forEach((snap) => {
            conversations.push(snap.val());
        });
        
        dispatch(getConversationsSuccess(conversations));
        
    } catch (e) {
        dispatch(getConversationsError(e));
    }
};