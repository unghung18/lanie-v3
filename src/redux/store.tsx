import { configureStore } from "@reduxjs/toolkit";
import toggleCartReducer from "./slices/toggleCartSlice";

export const store = configureStore({
    reducer: {
        toggleCart: toggleCartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch