import React from 'react';
import ReactDOM from 'react-dom';
import 'app/index.css';
import {Provider} from "react-redux";
import {index} from "store";
import App from 'app/App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={index}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
