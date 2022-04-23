import { request } from "./request";

export const getCatsApi = () => {
    return request.get('/images/search');
};
