export const messagesSelector = (roomId) => (state) => { // два вызова функции
    return state.messages.messages[roomId] ?? [];
};