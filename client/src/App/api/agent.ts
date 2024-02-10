import axios, { AxiosResponse } from "axios";

const sleep = () => new Promise (resolve => setTimeout(resolve,500));

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use( async response => {
    await sleep();
    return response;
})

const requests = {
    get: (url: string, params?: URLSearchParams) => axios.get(url, {params}).then(responseBody)
}

const Word = {
    enWord: () => requests.get("Word/En"),
    checkEnWord: (word: string) => requests.get("Word/En/" + word)
}

const agent = {
    Word,
}

export default agent;