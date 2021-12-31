export interface IMainInfo {
    callBack: (value: boolean) => void
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
}