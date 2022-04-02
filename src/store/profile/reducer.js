import { TOGGLE_VISIBLE_PROFILE } from "./types";

const initialState = {
    isVisibleProfile: true,
    firstName: 'firstName',
    lastName: 'lastName',
};

export const profileReducer = (state = initialState, action) => {
    // action.payload - получить данные которые пробросили в action, эти данные исп-ть в reducer и на их основе изменять состояние
    switch (action.type) {
        case TOGGLE_VISIBLE_PROFILE:
            return { ...state, isVisibleProfile: !state.isVisibleProfile }; //копируем старое состояние и изменяем на противоположное
        default:
            return state;
    }
};