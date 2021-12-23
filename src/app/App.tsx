import React from 'react';
import Search from 'components/Search';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {IWeatherCardResponse} from "../api/types";
import WeatherCard from "../components/WeatherCard";
import {Transition} from "react-transition-group";
import {DURATION_ANIMATION} from "../constants";


function App() {
    const weatherCard = useSelector<RootState, IWeatherCardResponse[]>(state => state.weather.cards)

    return <div className={'app'}>

        <Transition in={weatherCard.length === 0} timeout={DURATION_ANIMATION}>
            {state => <Search className={`${state}`}/>}
        </Transition>

        <Transition in={weatherCard.length !== 0} timeout={DURATION_ANIMATION} mountOnEnter unmountOnExit>
            {state => weatherCard.map((card, index) =>
                <WeatherCard
                    key={index}
                    className={`${state}`}
                    country={card.sys.country}
                    name={card.name}
                    speed={card.wind.speed}
                    temp={card.main.temp}
                    description={card.weather[0].description}
                    icon={card.weather[0].icon}
                />)
            }
        </Transition>


    </div>
}

export default App;
