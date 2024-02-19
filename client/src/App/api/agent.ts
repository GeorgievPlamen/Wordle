import axios, { AxiosError, AxiosResponse } from "axios";
import { store } from "../Store/configureStore";
import { toast } from "react-toastify";

const sleep = () => new Promise (resolve => setTimeout(resolve,500));

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.request.use(config => {
    const token = store.getState().account.user?.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
})

axios.interceptors.response.use( async response => {
    if (import.meta.env.DEV) {await sleep();}
    return response;
}, (error: AxiosError) => {
    const {data, status} = error.response as AxiosResponse;
    switch (status) {
        case 400:
            if(data.errors) {
                const modelStateErrors: string[] = [];
                for (const key in data.errors) {
                    modelStateErrors.push(data.errors[key])
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 500:
            toast.error(data.title);
            break;
    }
    return Promise.reject(error.response);
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