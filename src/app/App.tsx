import React from 'react';
import Search from 'components/Search';
import {useSelector} from "react-redux";
import {RootState} from "store/store";
import {IForecastDaysResponse, IWeatherCardResponse} from "api/types";
import WeatherCard from "components/WeatherCard";
import {Transition} from "react-transition-group";
import {DURATION_ANIMATION} from "../constants";
import {IForecastDays} from "store/reducers/search/types";


function App() {
    const weatherCard = useSelector<RootState, IWeatherCardResponse[]>(state => state.weather.cards)
    const week = useSelector<RootState, IForecastDays>(state => state.weather.forecastDays)

    console.log('wwwe', week)

    return <div className={'app'}>

        <Transition in={weatherCard.length === 0} timeout={DURATION_ANIMATION}>
            {state => <Search className={`${state}`}/>}
        </Transition>

        <Transition in={weatherCard.length !== 0} timeout={DURATION_ANIMATION} mountOnEnter unmountOnExit>
            {state => weatherCard.map((card, index) =>
                <WeatherCard
                    week={week[`${card.coord.lat}${card.coord.lon}`][0].daily}
                    key={index}
                    className={state}
                    country={card.sys.country}
                    name={card.name}
                    speed={card.wind.speed}
                    temp={card.main.temp}
                    description={card.weather[0].description}
                    feelsLike={card.main.feels_like}
                    icon={card.weather[0].icon}
                    sunrise={card.sys.sunrise}
                    humidity={card.main.humidity}

                />
            )
            }
        </Transition>

    </div>
}

export default App;
