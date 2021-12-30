import {IForecastDaysResponse, IWeatherCardResponse} from "api/types";

export interface IForecastDays {
    [key: string]: IForecastDaysResponse
}

export interface IState {
    title: string
    cards: IWeatherCardResponse[]
    forecastDays: IForecastDays
}