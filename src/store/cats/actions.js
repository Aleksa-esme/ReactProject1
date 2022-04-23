import { GET_CATS_START, GET_CATS_SUCCESS, GET_CATS_ERROR } from "./types";

/* actionCreator */

export const getCatsStart = () => {
    return { type: GET_CATS_START };
};

export const getCatsSuccess = (cats) => {
    return { type: GET_CATS_SUCCESS, payload: cats }
};

export const getCatsError = (e) => {
    return { type: GET_CATS_ERROR, payload: e }
};
