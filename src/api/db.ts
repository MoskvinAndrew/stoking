import axios from "axios";
import {restoreState, saveState} from "../utils/localStorage";

const defaultOptions = {
    baseURL: 'https://api.stoking.ru/v1/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
    }
};
const instance = axios.create(defaultOptions);
const accessToken: string = restoreState<string>("token", "");

instance.interceptors.request.use(config => {
    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
    return config;
});
instance.interceptors.response.use(response => response, error => {
    const { config, response: { status } } = error;
    if (status === 401) {

        console.log(config);
        return saveState<string>("token", "");
    } else {
        return Promise.reject(error);
    }
});

export const authApi = {
    signIn(){ //email: any, password: any
        const data = {email: 'apiuser@stoking.ru', password: 'bDrcBsemXN'};

        return instance
            .post(`user/login`, data)
            .then(response => response.data)
    },
};


