import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IState} from "./types";
import searchAPI from "../../../api";
import {IWeatherCardResponse} from "../../../api/types";

const initialState: IState = {
    title: '',
    cards: []
}

export const fetchSearch = createAsyncThunk('search/fetch', async (city: string, thunkAPI) => {
    try {
        const {data} = await searchAPI(city)

        console.log('response', data)
        thunkAPI.dispatch(addWeatherCard(data))
    } catch (e) {
        console.log('Error in fetchSearch', e)
    }
})

const slice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        onChangeValue: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        addWeatherCard: (state, action: PayloadAction<IWeatherCardResponse>) => {
            console.log('response in addWeatherCard', action.payload)
            state.cards.unshift(action.payload)
        }
    },

})

export const {onChangeValue, addWeatherCard} = slice.actions

export const weatherSlice = slice.reducer