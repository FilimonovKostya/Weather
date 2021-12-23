import React, {useState} from 'react';
import Search from 'components/Search';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {IWeatherCardResponse} from "../api/types";
import WeatherCard from "../components/WeatherCard";
import {Transition} from "react-transition-group";


function App() {
    const weatherCard = useSelector<RootState, IWeatherCardResponse[]>(state => state.weather.cards)
    const [isShowCard, setIShowCard] = useState(false)


    return <div className={'app'}>

        <Transition in={isShowCard} timeout={600}>
            {state => <Search setValue={setIShowCard} className={`${state}`}/>}
        </Transition>

        <Transition in={weatherCard.length !== 0} timeout={600} mountOnEnter unmountOnExit>
            {state => weatherCard.map((card, index) =>
                <WeatherCard
                    key={index}
                    removeCard={setIShowCard}
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
