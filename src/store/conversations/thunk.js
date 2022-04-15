import { 
    getConversationsStart, 
    getConversationsSuccess, 
    getConversationsError,
    createConversationsStart,
    createConversationsSuccess,
    createConversationsError
} from "./actions";

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

export const createConversationFb =
  (title) => async (dispatch, _, api) => {
    try {
      dispatch(createConversationsStart());

      await api.createConversationApi(title);

      dispatch(createConversationsSuccess(title));
    } catch (e) {
      dispatch(createConversationsError(e));
    }
};