import axios from 'axios';
//axios-библиотека для запросов, используем вместо fetch

//способ выполнения запроса
class Request {
    constructor(token = '') {
        this.request = axios.create({
            baseURL: "https://api.github.com", //часть запроса которая повторяется всегда
        });
        this.token = token;
    }

    get = (url) => {
        return this.request.get(url); //return fetch(url)
    };

    post = (url, body) => {
        return this.request.post(url, body);
    };

    delete = (url) => {
        return this.request.delete(url);
    };
}
export const request = new Request();