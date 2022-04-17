import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { profileReducer } from './profile';
import { conversationsReducer } from './conversations';
import { messagesReducer } from './messages';
import { gistsReducer } from './gists';
import { catsReducer } from './cats';
import { logger, botMessage, timeScheduler, crashReporter } from './middlewares';
import { getCatsApi } from "../catApi/cats";
import { 
    getPublicGistsApi, 
    getMessagesApi, 
    createMessageApi, 
    getConversationApi,
    createConversationApi,
} from "../api";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["messages"],
    whitelist: ["profile"],
};

export const reducer = combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    gists: gistsReducer,
    cats: catsReducer,
});

const apis = { 
    getPublicGistsApi, 
    getCatsApi, 
    getMessagesApi,
    createMessageApi,
    getConversationApi,
    createConversationApi,
}

export const store = createStore(
    persistReducer(persistConfig, reducer),
    compose(
        applyMiddleware(
            crashReporter, 
            thunk.withExtraArgument(apis), 
            logger, 
            botMessage, 
            timeScheduler,
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ 
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (args) => args
    )
);

export const persistor = persistStore(store);
//redux-persist - хранение данных в браузере