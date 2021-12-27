import axios from "axios";
import {API_KEY, API_URL} from "../constants";
import {IWeatherCardResponse} from "./types";

const weather = axios.create({
    baseURL: API_URL,
    params: {appid: API_KEY}
})

const searchAPI = (city: string) => weather.get<IWeatherCardResponse>(`weather?units=metric&q=${city}`)

export default searchAPI
