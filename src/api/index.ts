import axios from "axios";
import {API_KEY, API_URL} from "../constants";
import {IWeatherCardResponse} from "./types";

const instance = axios.create({
    baseURL: API_URL,
    params: {appid: API_KEY}
})


const searchAPI = (city: string) => instance.get<IWeatherCardResponse>(`weather?units=metric&q=${city}`)

export default searchAPI
