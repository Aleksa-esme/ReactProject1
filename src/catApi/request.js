import axios from 'axios';

class Request {
    constructor() {
        this.request = axios.create({
            baseURL: `https://api.thecatapi.com/v1/images/search`,
        });
    }

    get = () => {
        return this.request.get();
    };
}
export const request = new Request();