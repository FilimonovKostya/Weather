import React from "react";
import style from "./style.module.scss";
import {ReactComponent as Info} from "../../../assets/icons/info.svg";
import {API_URL_ICON} from "../../../constants";
import {ReactComponent as FeelsLikeIcon} from "../../../assets/icons/temperature-feels-like.svg";
import {ReactComponent as Sunrise} from "../../../assets/icons/sunrise-svgrepo-com.svg";
import {ReactComponent as HumidityIcon} from "../../../assets/icons/humidity-svgrepo-com.svg";
import {ReactComponent as WindSpeedIcon} from "../../../assets/icons/wind-svgrepo-com.svg";
import {IMainInfo} from "./types";

export const MainInfo = ({callBack, country, description, icon, name, speed, temp, feelsLike, sunrise, humidity}: IMainInfo) => (
    <div className={style.wrapper}>
        <div className={style.header}>
            <p className={style.title}>{name}, {country} </p>
            <div className={style.info} onClick={() => callBack(true)} role={"presentation"}>
                <Info/></div>
        </div>
        <div className={style.shortInfoWeather}>
            <div className={style.statusWeather}>
                <img src={`${API_URL_ICON}${icon}.png`} alt=""/>
                <span className={style.tooltip}>{description}</span>
            </div>
            <span className={style.temperatureText}>{temp}°</span>
            <span className={style.day}>Today</span>
        </div>
        <ul className={style.weatherList}>
            <li className={style.itemWeather}>
                <FeelsLikeIcon/>
                <div className={style.itemInfoWeather}>
                    <p>{feelsLike}°</p>
                </div>
            </li>
            <li className={style.itemWeather}>
                <Sunrise/>
                <div className={style.itemInfoWeather}>
                    <p>{sunrise}</p>
                </div>
            </li>
            <li className={style.itemWeather}>
                <HumidityIcon/>
                <div className={style.itemInfoWeather}>
                    <p>{humidity}%</p>
                </div>
            </li>
            <li className={style.itemWeather}>
                <WindSpeedIcon/>
                <div className={style.itemInfoWeather}>
                    <p>{speed} m/s</p>
                </div>
            </li>
        </ul>
    </div>
)