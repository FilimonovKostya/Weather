import React from 'react';
import Search from 'components/Search';
import {useSelector} from "react-redux";
import {RootState} from "store/store";
import {IWeatherCardResponse} from "api/types";
import WeatherCard from "components/WeatherCard";
import {Transition} from "react-transition-group";
import {DURATION_ANIMATION} from "../constants";
import {IForecastDays} from "store/reducers/search/types";
import Preloader from "../components/Preloader";


function App() {
    const weatherCard = useSelector<RootState, IWeatherCardResponse[]>(state => state.weather.cards)
    const week = useSelector<RootState, IForecastDays>(state => state.weather.forecastDays)
    const isLoadingData = useSelector<RootState, boolean>(state => state.status.isLoading)

    if (isLoadingData) {
        return <Preloader/>
    }

    return <div className={'app'}>
        <Transition in={weatherCard.length === 0} timeout={DURATION_ANIMATION}>
            {state => <Search className={`${state}`}/>}
        </Transition>

        <Transition in={weatherCard.length !== 0} timeout={DURATION_ANIMATION} mountOnEnter unmountOnExit>
            {state => weatherCard.map((card, index) =>
                <WeatherCard
                    key={index}
                    week={week[`${card.coord.lat}${card.coord.lon}`].daily}
                    className={state}
                    country={card.sys.country}
                    name={card.name}
                    speed={card.wind.speed}
                    temp={card.main.temp}
                    description={card.weather[0].description}
                    feelsLike={card.main.feels_like}
                    icon={card.weather[0].icon}
                    sunrise={card.sys.sunrise}
                    sunset={card.sys.sunset}
                    humidity={card.main.humidity}
                />
            )
            }
        </Transition>

    </div>
}

export default App;
