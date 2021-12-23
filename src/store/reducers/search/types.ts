import {IWeatherCardResponse} from "../../../api/types";

export interface IState {
    title: string
    cards: IWeatherCardResponse[]
}