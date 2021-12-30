import React from 'react';
import style from "./style.module.scss";
import {ReactComponent as Arrow} from "assets/icons/arrow.svg";
import {IExtraInformation} from "./types";

const ExtraInformation = ({callBack}: IExtraInformation) => (
    <div className={style.redWrapper}>
        <div className={style.icon} onClick={() => callBack(false)} role={"presentation"}><Arrow/></div>
        <ul className={style.weatherList}>
            {/*{*/}
            {/*    daily.map(el => (*/}
            {/*        <li className={style.itemWeather}>*/}
            {/*            <span> Sunday </span>*/}
            {/*            <div className={style.itemInfoWeather}>*/}
            {/*                /!*<div><Cloud/></div>*!/*/}
            {/*                <p>{el.temp.day}°</p>*/}
            {/*            </div>*/}
            {/*        </li>))*/}
            {/*}*/}
            {/*<li className={style.itemWeather}>*/}
            {/*    <span> Sunday </span>*/}
            {/*    <div className={style.itemInfoWeather}>*/}
            {/*        /!*<div><Cloud/></div>*!/*/}
            {/*        <p>44°</p>*/}
            {/*    </div>*/}
            {/*</li>*/}
            {/*<li className={style.itemWeather}>*/}
            {/*    <span> Sunday </span>*/}
            {/*    <div className={style.itemInfoWeather}>*/}
            {/*        /!*<div><Cloud/></div>*!/*/}
            {/*        <p>44°</p>*/}
            {/*    </div>*/}
            {/*</li>*/}
            {/*<li className={style.itemWeather}>*/}
            {/*    <span> Sunday </span>*/}
            {/*    <div className={style.itemInfoWeather}>*/}
            {/*        /!*<div><Cloud/></div>*!/*/}
            {/*        <p>44°</p>*/}
            {/*    </div>*/}
            {/*</li>*/}
            {/*<li className={style.itemWeather}>*/}
            {/*    <span> Sunday </span>*/}
            {/*    <div className={style.itemInfoWeather}>*/}
            {/*        /!*<div><Cloud/></div>*!/*/}
            {/*        <p>44°</p>*/}
            {/*    </div>*/}
            {/*</li>*/}
            {/*<li className={style.itemWeather}>*/}
            {/*    <span> Sunday </span>*/}
            {/*    <div className={style.itemInfoWeather}>*/}
            {/*        /!*<div><Cloud/></div>*!/*/}
            {/*        <p>44°</p>*/}
            {/*    </div>*/}
            {/*</li>*/}
            {/*<li className={style.itemWeather}>*/}
            {/*    <span> Sunday </span>*/}
            {/*    <div className={style.itemInfoWeather}>*/}
            {/*        /!*<div><Cloud/></div>*!/*/}
            {/*        <p>44°</p>*/}
            {/*    </div>*/}
            {/*</li>*/}
        </ul>
    </div>
);

export default ExtraInformation;