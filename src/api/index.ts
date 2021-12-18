import axios from "axios";
import {ISearchResponse} from "./types";

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/weather',
    params: {appid: '3cd1cd1507089288f25c162d3747cbae'}
})


const searchAPI = (value: string) => instance.get<ISearchResponse>(`?q=${value}`)

export default searchAPI
