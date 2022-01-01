import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IState} from "./types";

const initialState: IState = {
    isLoading: false,
    errorMessage: ''
}

const slice = createSlice({
    name: 'appStatus',
    initialState,
    reducers: {
        setAppStatus: (state, action: PayloadAction<{ isLoading: boolean }>) => {
            state.isLoading = action.payload.isLoading
        },
        setErrorMessage: (state, action: PayloadAction<{ message: string }>) => {
            state.errorMessage = action.payload.message
        }
    }
})

export const {setAppStatus, setErrorMessage} = slice.actions

export const appSlice = slice.reducer
