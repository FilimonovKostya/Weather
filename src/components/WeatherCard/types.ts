import {Dailies} from "api/types";

export interface IWeatherCard {
    className: string
    callBack?: (value: boolean) => void
    isShowExtraInfo?: boolean
    name: string
    speed: number
    country: string
    description: string
    icon: string
    temp: number
    feelsLike: number
    sunrise: string | number
    sunset: string | number
    humidity: number
    week: Dailies[]
}
