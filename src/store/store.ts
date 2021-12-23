import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunkMiddleware from "redux-thunk";
import {weatherSlice} from "./reducers/search";


const rootReducer = combineReducers({
    weather: weatherSlice,
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootState = ReturnType<typeof rootReducer>
