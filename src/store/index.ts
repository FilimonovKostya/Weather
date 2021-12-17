import {configureStore} from '@reduxjs/toolkit'
import searchReducer from "./reducers/search";

export const index = configureStore({
    reducer: {
        search: searchReducer
    },
})

export type RootState = ReturnType<typeof index.getState>

export type AppDispatch = typeof index.dispatch