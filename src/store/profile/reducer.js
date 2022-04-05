import { TOGGLE_VISIBLE_PROFILE, UPDATE_PROFILE } from "./types";

const initialState = {
    isVisibleProfile: true,
    firstName: 'firstName',
    lastName: 'lastName',
    role: "admin",
    phone: "12312321312321",
    country: "ru",
    image: '',
};

/* 
action.payload - получить данные которые пробросили в action, эти данные исп-ть в reducer и на их основе изменять состояние
...state - сохранение состояния через spread(текущие св-ва из initialState)
...action.payload - повторный spread перезатирает значения предыдущего спрэда(новые св-ва в initialState)
*/
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_VISIBLE_PROFILE:
            return { ...state, isVisibleProfile: !state.isVisibleProfile }; //копируем старое состояние и изменяем на противоположное
        case UPDATE_PROFILE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};