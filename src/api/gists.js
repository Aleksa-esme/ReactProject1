import { request } from "./request";

export const getPublicGistsApi = (page) => {
    return request.get(`gists/public?page=${page}`);
};

// сделать:
// export const searchGistsByNameApi = (name = 'Aleksa-esme') => {
//     return request.get(`/users${name}/gists`);
// };