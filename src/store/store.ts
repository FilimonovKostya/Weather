import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunkMiddleware from "redux-thunk";
import {weatherSlice} from "./reducers/search";
import {appSlice} from "./reducers/appStatus";


const rootReducer = combineReducers({
    weather: weatherSlice,
    status: appSlice
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootState = ReturnType<typeof rootReducer>
