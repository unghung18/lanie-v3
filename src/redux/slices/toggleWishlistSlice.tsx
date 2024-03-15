import { createSlice } from "@reduxjs/toolkit";

interface stateTypeProp {
    toggleWishlist: boolean;
}

const initialState: stateTypeProp = {
    toggleWishlist: false
};


const toggleWishlistSlice = createSlice({
    name: "toggleWishlist",
    initialState,
    reducers: {
        toggleWishlist(state, actions) {
            state.toggleWishlist = actions.payload
        }
    },
});

export const { toggleWishlist } = toggleWishlistSlice.actions;
export default toggleWishlistSlice.reducer;