import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IState} from "./types";
import {forecastDaysAPI, searchAPI} from "api";
import {dateHelper, dayHelper} from "helpers";
import {setAppStatus, setErrorMessage} from "../appStatus";

const initialState: IState = {
    title: '',
    cards: [],
    forecastDays: {}
}

export const fetchSearch = createAsyncThunk('search/fetch', async (city: string, thunkAPI) => {
    thunkAPI.dispatch(setAppStatus({isLoading: true}))
    try {
        const {data} = await searchAPI(city)
        const {data: week} = await forecastDaysAPI(data.coord.lat, data.coord.lon)

        thunkAPI.dispatch(setAppStatus({isLoading: false}))
        return {data, week}
    } catch (e) {
        thunkAPI.dispatch(setErrorMessage({message: 'Oop something went wrong , try to update page and try again'}))
        return thunkAPI.rejectWithValue('error')
    }
})

const slice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        onChangeValue: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSearch.fulfilled, (((state, action) => {
                const weekCord = `${action.payload.week.lat}${action.payload.week.lon}`

                state.forecastDays[weekCord] = {
                    ...action.payload.week,
                    daily: action.payload.week.daily.map(el => ({
                        ...el,
                        dt: dayHelper(+el.dt),
                        temp: {
                            ...el.temp,
                            day: Math.round(el.temp.day)
                        }
                    }))
                }

                state.cards.unshift({
                    ...action.payload.data,
                    main: {
                        ...action.payload.data.main,
                        temp: Math.round(action.payload.data.main.temp),
                        feels_like: Math.round(action.payload.data.main.feels_like)
                    },
                    sys: {
                        ...action.payload.data.sys,
                        sunrise: dateHelper(+action.payload.data.sys.sunrise),
                        sunset: dateHelper(+action.payload.data.sys.sunset)
                    }
                })

                state.title = ''
            })))
    }

})

export const {onChangeValue} = slice.actions

export const weatherSlice = slice.reducer