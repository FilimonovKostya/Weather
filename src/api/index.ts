import axios from "axios";

const instance = axios.create({
    baseURL: 'api.openweathermap.org/data/2.5/weather?appid=3cd1cd1507089288f25c162d3747cbae&q='
})
export default instance