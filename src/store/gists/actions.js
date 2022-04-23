import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR } from "./types";

/* actionCreator */

export const getGistsStart = () => {
    return { type: GET_GISTS_START };
};

export const getGistsSuccess = (gists) => {
    return { type: GET_GISTS_SUCCESS, payload: gists }
};

export const getGistsError = (e) => {
    return { type: GET_GISTS_ERROR, payload: e }
};
