import { createSlice } from "@reduxjs/toolkit";

interface stateTypeProp {
    toggleCart: boolean;
}

const initialState: stateTypeProp = {
    toggleCart: false
};


const toggleCartSlice = createSlice({
    name: "toggleCart",
    initialState,
    reducers: {
        toggle(state, actions) {
            state.toggleCart = actions.payload
        }
    },
});

export const { toggle } = toggleCartSlice.actions;
export default toggleCartSlice.reducer;