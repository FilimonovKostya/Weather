import React, {useState} from 'react';
import WeatherCard from "./components/WeatherCard";
import ExtraInformation from "./components/WeatherCard/ExtraInformation";

function App() {
    const [isShowExtraInfo, setIsShowExtraInfo] = useState(false)

    return <>
        {
            isShowExtraInfo
                ? <ExtraInformation  callBack={setIsShowExtraInfo}/>
                : <WeatherCard isShowExtraInfo={isShowExtraInfo} callBack={setIsShowExtraInfo}/>
        }
    </>
}

export default App;
