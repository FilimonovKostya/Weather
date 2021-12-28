import axios from "axios";
import {API_KEY, API_URL, API_URL_FORECAST_DAYS} from "../constants";
import {IWeatherCardResponse} from "./types";

const weather = axios.create({
    baseURL: API_URL,
    params: {appid: API_KEY}
})

export const forecastDays = axios.create({
    baseURL: API_URL_FORECAST_DAYS,
    params: {appid: API_KEY}
})

// "lat": 33.44,
// "lon": -94.04,
//lat: string, lon: string
export const searchAPI = (city: string) => weather.get<IWeatherCardResponse>(`weather?units=metric&q=${city}`)
export const forecastDaysAPI = () => forecastDays.get(`&lat=${53.9}&lon=${27.5667}`)

