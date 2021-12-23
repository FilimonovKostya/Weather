import React from 'react';
import style from './style.module.scss'
import {ReactComponent as Info} from "assets/icons/info.svg";
import {ReactComponent as Cloud} from "assets/icons/cloud.svg";

interface IWeatherCard {
    callBack?: (value: boolean) => void
    isShowExtraInfo?: boolean
    name: string
    speed: number
    country: string
    description: string
    icon: string
    temp: number
}

const WeatherCard = ({isShowExtraInfo, callBack, country, description, icon, name, speed, temp}: IWeatherCard) => (
    <div className={style.wrapper}>
        <div className={style.header}>
            <p className={style.title}>{name}, {country}</p>
            <div className={style.info} onClick={() => console.log('click card')} role={"presentation"}>
                <Info/></div>
        </div>
        <div className={style.shortInfoWeather}>
            <div className={style.statusWeather}><Cloud/></div>
            <span className={style.temperatureText}>{temp}°</span>
            <span className={style.day}>Today</span>
        </div>
        <ul className={style.weatherList}>
            <li className={style.itemWeather}>
                <span> Sunday </span>
                <div className={style.itemInfoWeather}>
                    <div><Cloud/></div>
                    <p>44°</p>
                </div>
            </li>
            <li className={style.itemWeather}>
                <span> Sunday </span>
                <div className={style.itemInfoWeather}>
                    <div><Cloud/></div>
                    <p>44°</p>
                </div>
            </li>
            <li className={style.itemWeather}>
                <span> Sunday </span>
                <div className={style.itemInfoWeather}>
                    <div><Cloud/></div>
                    <p>44°</p>
                </div>
            </li>
        </ul>
    </div>
)

export default WeatherCard;