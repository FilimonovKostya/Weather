import React from 'react';
import style from './style.module.scss'
import {ReactComponent as Info} from "./../../assets/icons/info.svg";
import {ReactComponent as Cloud} from "./../../assets/icons/cloud.svg";

const WeatherCard = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <p className={style.title}>City, KY</p>
                <div className={style.info}><Info/></div>
            </div>
            <div className={style.shortInfoWeather}>
                <div className={style.statusWeather}><Cloud/></div>
                <span className={style.temperatureText}>72<sup>o</sup></span>
                <span className={style.day}>Today</span>
            </div>
            <ul className={style.weatherList}>
                <li className={style.itemWeather}>
                    <span> Sunday </span>
                    <div className={style.itemInfoWeather}>
                        <p>icon</p>
                        <p>44</p>
                    </div>
                </li>
                <li className={style.itemWeather}>
                    <span> Sunday </span>
                    <div className={style.itemInfoWeather}>
                        <p>icon</p>
                        <p>44</p>
                    </div>
                </li>
                <li className={style.itemWeather}>
                    <span> Sunday </span>
                    <div className={style.itemInfoWeather}>
                        <p>icon</p>
                        <p>44</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default WeatherCard;