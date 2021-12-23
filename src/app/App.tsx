import React from 'react';
import Search from 'components/Search';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {IWeatherCardResponse} from "../api/types";
import WeatherCard from "../components/WeatherCard";


function App() {
    const weatherCard = useSelector<RootState, IWeatherCardResponse[]>(state => state.weather.cards)

    console.log('weatherCard', weatherCard)

    return <div className={'app'}>
        <Search/>
        {weatherCard.length !== 0 && weatherCard.map((card, index) =>
            <WeatherCard key={index} country={card.sys.country}
                         name={card.name}
                         speed={card.wind.speed}
                         temp={card.main.temp}
                         description={card.weather[0].description}
                         icon={card.weather[0].icon}/>
        )}
    </div>
}

export default App;
