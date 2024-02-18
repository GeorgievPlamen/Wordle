import axios, { AxiosResponse } from "axios";
import { store } from "../Store/configureStore";

const sleep = () => new Promise (resolve => setTimeout(resolve,500));

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.request.use(config => {
    const token = store.getState().account.user?.token;
    if (token) config.headers.Authorization = `Beare ${token}`;
    return config;
})

axios.interceptors.response.use( async response => {
    await sleep();
    return response;
})

const requests = {
    get: (url: string, params?: URLSearchParams) => axios.get(url, {params}).then(responseBody),
    post: (url: string, body: object) => axios.post(url, body).then(responseBody)
}

const Word = {
    enWord: () => requests.get("Word/En"),
    checkEnWord: (word: string) => requests.get("Word/En/" + word),
    bgWord: () => requests.get("Word/Bg"),
    checkBgWord: (word: string) => requests.get("Word/Bg/" + word)
}

const Guesses = {
    userAttemptsToday: (userId: string) => requests.get("Attempts/" + userId),
    userGuesses: (userId: string) => requests.get("Attempts/userguesses/" + userId)
}

const Account = {
    login: (values: object) => requests.post("Account/login", values),
    register: (values: object) => requests.post("account/register", values),
    currentUser: () => requests.get("account/currentUser")
}

const agent = {
    Word,Guesses,Account
}

export default agent;