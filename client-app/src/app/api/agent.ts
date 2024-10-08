import axios, { AxiosResponse } from "axios";
import { Activity } from "../models/activity";

axios.defaults.baseURL = "http://localhost:5000/api";

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}

axios.interceptors.response.use(async res => {
    try{
        await sleep(1000);
        return res;
    } catch(err) {
        console.log(err);
        return Promise.reject(err);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody)
}

const Activities = {
    list: () => requests.get<Activity[]>("/activities"),
    details: (id: string) => requests.get<Activity>(`/activities/${id}`),
    create: (act: Activity) => axios.post<void>("/activities", act),
    update: (act: Activity) => axios.put<void>(`/activities/${act.id}`, act),
    delete: (id: string) => axios.delete<void>(`/activities/${id}`)
}

const agent = {
    Activities
}

export default agent;