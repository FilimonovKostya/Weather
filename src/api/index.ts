import axios from "axios";
import {ISearchResponse} from "./types";

// const url = 'api.openweathermap.org/data/2.5/weather?Q=London,uk&APPID=3cd1cd1507089288f25c162d3747cbae'

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=3cd1cd1507089288f25c162d3747cbae',
})


const searchAPI = (value: string) => {
    return instance.get(``)
}

export default searchAPI


// const url = 'api.openweathermap.org/data/2.5/weather?q=Minsk'
//
// const instance = axios.create({
//     baseURL: url,
//     params: {appid:'3cd1cd1507089288f25c162d3747cbae'}
// })