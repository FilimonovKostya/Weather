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

        console.log('response', data)
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
        }
    },

})

export const {onChangeValue} = slice.actions

export const weatherSlice = slice.reducer