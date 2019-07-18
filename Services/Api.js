import axios from 'axios';
import { getToken } from './Authentication';

const headers = {
    'Content-Type': 'application/json'
};

const API = axios.create({
    baseURL: serverRuntimeConfig.API + '/wp-json/api',
    headers
});

API.interceptors.request.use(async config => {
    const token = getToken();

    if(token)
        config.headers.Authorization = `Bearer ${ token }`;

    return config;
})

export default API;