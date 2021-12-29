import axios from "axios";
import {API_KEY, API_URL, API_URL_FORECAST_DAYS} from "../constants";
import {IForecastDaysResponse, IWeatherCardResponse} from "./types";

const weather = axios.create({
    baseURL: API_URL,
    params: {appid: API_KEY}
})

export const forecastDays = axios.create({
    baseURL: API_URL_FORECAST_DAYS,
    params: {appid: API_KEY}
})


export const searchAPI = (city: string) => weather.get<IWeatherCardResponse>(`weather?units=metric&q=${city}`)
export const forecastDaysAPI = (lat: string, lon: string) => forecastDays.get<IForecastDaysResponse>(`&lat=${lat}&lon=${lon}`)

