import axios from "axios";

export const api = axios.create({
    baseURL: 'https://dtmoney-apps.netlify.app/api',
})