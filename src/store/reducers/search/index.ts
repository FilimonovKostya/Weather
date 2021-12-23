import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IState} from "./types";
import searchAPI from "../../../api";

const initialState: IState = {
    title: '',
    cards: []
}

export const fetchSearch = createAsyncThunk('search/fetch', async (city: string, thunkAPI) => {
    try {
        const {data} = await searchAPI(city)

        return {data}
    } catch (e) {
        throw new Error('Error with request for weather data')
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
                state.cards.unshift({
                    ...action.payload.data,
                    main: {
                        ...action.payload.data.main,
                        temp: Math.round(action.payload.data.main.temp)
                    }
                })
                state.title = ''
            })))
    }


})

export const {onChangeValue} = slice.actions

export const weatherSlice = slice.reducer