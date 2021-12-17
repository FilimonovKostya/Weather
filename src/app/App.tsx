import React, {useEffect} from 'react';
import Search from 'components/Search';
import searchAPI from "../api";


function App() {

    useEffect(() => {
        searchAPI('Minsk')
            .then(res => console.log('res', res))
            .catch(err => console.log('error', err))

        // fetch('api.openweathermap.org/data/2.5/weather?appid=3cd1cd1507089288f25c162d3747cbae&q=Minsk')
        //     .then(res => console.log('response', res))

    }, [])


    return <div className={'app'}>
        <Search/>

    </div>
}

export default App;
