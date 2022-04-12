import { GET_CATS_START, GET_CATS_SUCCESS, GET_CATS_ERROR } from "./types";


const initialState = {
    cats: [],
    error: null,
};

export const catsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATS_START:
            return { ...state, error: null };
        case GET_CATS_SUCCESS:
            return { ...state, cats: action.payload };
        case GET_CATS_ERROR:
            return { ...state, error:action.payload };
        default:
            return state;
    }
};