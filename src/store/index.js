import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { profileReducer } from './profile';
import { conversationsReducer } from './conversations';
import { messagesReducer } from './messages';
import { gistsReducer } from './gists';
import { catsReducer } from './cats';
import { getPublicGistsApi } from "../api/gists";
import { getCatsApi } from "../catApi/cats";
import { getConversationApi } from "../api/conversations";
import { getMessagesApi, createMessageApi } from "../api/messages";
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
    gists: gistsReducer,
    cats: catsReducer,
});

const apis = { 
    getPublicGistsApi, 
    getCatsApi, 
    getConversationApi,
    getMessagesApi,
    createMessageApi,

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