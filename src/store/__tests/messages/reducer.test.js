import { 
    messagesReducer, 
    deleteMessage, 
    getMessagesStart, 
    getMessagesSuccess,
    getMessagesError,
    sendMessagesStart,
    sendMessagesSucess,
    sendMessagesError
} from '../../messages';
import { deleteConversation } from '../../conversations';

describe('message reducer', () => {
    describe('other types', () => {
        it('delete message by id', () => { //редьюсер возвращает новое состояние
            const state = messagesReducer(
                {
                    messages: {
                        room1: [{ id: 1}, { id: 2 }],
                    },
                }, 
                deleteMessage('room1', 1)
            );
            expect(state.messages.room1.length).toBe(1);
            expect(state.messages.room1.find((m) => m.id === 1)).toBeUndefined();
            
            expect(state).toEqual({
                messages: {
                    room1: [{ id: 2 }],
                },
            });
        });
        it('delete conversation', () => { //редьюсер возвращает новое состояние
            const state = messagesReducer(
                {
                    messages: {
                        room1: [],
                        room2: [],
                    },
                }, 
                deleteConversation('room1')
            );
            expect(state).toEqual({
                messages: {
                    room2: [],
                },
            });
            //или так:
            expect(Object.keys(state.messages).find((c) => c === 'room1')).toBeUndefined();
        });
    });
    describe('get messages', () => {
        it('start', () => {
            const state = messagesReducer(
                {
                    pending: false, 
                    error: 'error',
                }, 
                getMessagesStart()
            );
            expect(state.pending).toBe(true);
            expect(state.error).toBeNull();
        });
        it('success', () => {
            const state = messagesReducer(
                {
                    pending: true, 
                    messages: null,
                }, 
                getMessagesSuccess('test')
            );
            expect(state.pending).toBeFalsy();
            expect(state.messages).toBe('test');
        });
        it('error', () => {
            const state = messagesReducer(
                {
                    pending: true, 
                    error: null,
                }, 
                getMessagesError('error')
            );
            expect(state.pending).toBeFalsy();
            expect(state.error).toBe('error');
        });
    });
    describe('send messages', () => {
        it('start', () => {
            const state = messagesReducer(
                {
                    pendingSendMessage: false, 
                    errorSendMessage: 'error',
                }, 
                sendMessagesStart()
            );
            expect(state.pendingSendMessage).toBeTruthy();
            expect(state.errorSendMessage).toBeNull();
        });
        it('success', () => {
            const state = messagesReducer(
                {
                    pendingSendMessage: true, 
                    messages: {},
                }, 
                sendMessagesSucess('test message', 'room1')
            );
            expect(state.pendingSendMessage).toBeFalsy();
            expect(state.messages).toEqual({
                room1: ['test message'],
            });
        });
        it('error', () => {
            const state = messagesReducer(
                {
                    pendingSendMessage: true, 
                    errorSendMessage: null,
                }, 
                sendMessagesError('error')
            );
            expect(state.pendingSendMessage).toBeFalsy();
            expect(state.errorSendMessage).toBe('error');
        });
    });
});