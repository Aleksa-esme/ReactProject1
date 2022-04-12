import { SEND_MESSAGE, sendMessage } from "../messages";

export const botMessage = (store) => (next) => (action) => {
    if (
        action.type === SEND_MESSAGE &&
        action.payload.message.author === 'User'
    ) {
        setTimeout(() => {
            store.dispatch(
                sendMessage(action.payload.roomId, {
                    author: 'Bot',
                    message: 'Hi! It\'s middleware bot...',
                })
            );
        }, 1000);
    }
    return next(action);
};

//мидлвары выполняются до того как action попадает в reducer
//в мидлварах можно выполнять любые действие