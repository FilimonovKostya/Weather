import React from 'react';
import style from "./style.module.scss";
import {ReactComponent as Cloud} from "../../../assets/icons/cloud.svg";

interface IExtraInformation {
    callBack: (value: boolean) => void
}

const ExtraInformation = ({callBack}: IExtraInformation) => (
    <div className={style.redWrapper}>
        <div role={"presentation"} onClick={() => callBack(false)}>X</div>
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
            <li className={style.itemWeather}>
                <span> Sunday </span>
                <div className={style.itemInfoWeather}>
                    <div><Cloud/></div>
                    <p>44°</p>
                </div>
            </li>
        </ul>
    </div>
);

export default ExtraInformation;