import { createSlice } from "@reduxjs/toolkit";

interface stateTypeProp {
    toggleCart: boolean;
}

const initialState: stateTypeProp = {
    toggleCart: true
};


const toggleCartSlice = createSlice({
    name: "toggleCart",
    initialState,
    reducers: {
        toggle(state) {
            state.toggleCart = !state.toggleCart
        }
    },
});

export const { toggle } = toggleCartSlice.actions;
export default toggleCartSlice.reducer;