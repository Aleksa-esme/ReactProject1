export const messagesSelector = (roomId) => (state) => { // два вызова функции
    return state.messages.messages[roomId] ?? [];
};

export const lastMessageSelector = (roomId) => (state) => {
    const messages = state.messages.messages[roomId] ?? [];
    return messages[messages.length - 1];
};