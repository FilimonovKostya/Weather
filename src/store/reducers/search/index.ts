import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ISearch} from "./types";

const initialState: ISearch = {
    value: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        onChangeValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    },
})

export const {onChangeValue} = searchSlice.actions

export default searchSlice.reducer