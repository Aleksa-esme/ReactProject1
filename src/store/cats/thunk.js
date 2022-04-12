import { getCatsStart, getCatsSuccess, getCatsError } from "./actions";

export const getCats = () => async (dispatch, _, catApi) => {
    try {
        dispatch(getCatsStart());

        const { data } = await catApi.getCatsApi();
        dispatch(getCatsSuccess(data));
        
    } catch (e) {
        dispatch(getCatsError(e));
    }
}