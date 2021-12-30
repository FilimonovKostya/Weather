import {Dailies, IWeatherCardResponse} from "api/types";

interface IForecastDays {
    [key: string]: Dailies[]
}

export interface IState {
    title: string
    cards: IWeatherCardResponse[]
    forecastDays: IForecastDays
}