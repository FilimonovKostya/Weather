import React from 'react';
import style from "./style.module.scss";
import {ReactComponent as Arrow} from "assets/icons/arrow.svg";
import {IExtraInformation} from "./types";

const ExtraInformation = ({callBack, week}: IExtraInformation) => (
    <div className={style.redWrapper}>
        <div className={style.icon} onClick={() => callBack(false)} role={"presentation"}><Arrow/></div>
        <ul className={style.weatherList}>
            {
                week.map((el, index) => (
                    <li key={index} className={style.itemWeather}>
                        <span> {el.dt} </span>
                        <div className={style.itemInfoWeather}>
                            <p>{el.temp.day}°</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default ExtraInformation;