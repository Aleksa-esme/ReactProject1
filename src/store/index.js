import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { profileReducer } from './profile';
import { conversationsReducer } from './conversations';
import { messagesReducer } from './messages';
import { logger, botMessage, timeScheduler, crashReporter } from './middlewares';

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["messages"],
    whitelist: ["profile"],
};

const reducer = combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
});

export const store = createStore(
    persistReducer(persistConfig, reducer),
    compose(
        applyMiddleware(crashReporter, thunk.withExtraArgument(), logger, botMessage, timeScheduler),
        window.__REDUX_DEVTOOLS_EXTENSION__ 
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (args) => args
    )
);

export const persistor = persistStore(store);
//redux-persist - хранение данных в браузере