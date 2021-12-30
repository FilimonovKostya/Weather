import React, {useState} from 'react';
import style from './style.module.scss'
import ExtraInformation from "./ExtraInformation";
import {MainInfo} from "./MainInfo";
import {IWeatherCard} from './types';

const WeatherCard = ({className, country, description, icon, name, speed, temp, feelsLike, sunrise, humidity, week}: IWeatherCard) => {
    const [isShowExtraInfo, setIsShowExtraInfo] = useState(false)

    return <div className={`${style.parent} ${style[className]}`}>
        {
            isShowExtraInfo
                ? <ExtraInformation callBack={setIsShowExtraInfo} week={week}/>
                : <MainInfo
                    callBack={setIsShowExtraInfo} country={country} description={description}
                    icon={icon} name={name} speed={speed} temp={temp} feelsLike={feelsLike} sunrise={sunrise} humidity={humidity}
                />
        }
    </div>

}

export default WeatherCard;