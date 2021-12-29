export interface IWeatherCardResponse {
    coord: {
        lon: number
        lat: number
    },
    weather: [{
        id: number
        main: string
        description: string
        icon: string
    }],
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
        sea_level: number
        grnd_level: number
    },
    visibility: number
    wind: {
        speed: number
        deg: number
        gust: number
    },
    clouds: {
        all: number
    },
    dt: number
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    },
    timezone: number
    id: number
    name: string
    cod: number
}

type DailiesWeather = {
    id: number
    main: string
    description: string
    icon: string
}

type Dailies = {
    clouds: number
    dew_point: number
    dt: number
    feels_like: { day: number, night: number, eve: number, morn: number }
    humidity: number
    moon_phase: number
    moonrise: number
    moonset: number
    pop: number
    pressure: number
    sunrise: number
    sunset: number
    temp: { day: number, min: number, max: number, night: number, eve: number, morn: number }
    uvi: number
    weather: DailiesWeather[]
    wind_deg: number
    wind_gust: number
    wind_speed: number
}

export interface IForecastDaysResponse {
    daily: Dailies[]
    lat: number
    lon: number
    timezone: string,
    timezone_offset: number
}