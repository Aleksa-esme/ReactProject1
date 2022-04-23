import axios from 'axios';

class Request {
    constructor() {
        this.request = axios.create({
            baseURL: `https://api.thecatapi.com/v1`,
        });
    }

    get = (url) => {
        return this.request.get(url);
    };
}
export const request = new Request();