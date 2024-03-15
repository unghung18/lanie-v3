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
        toggleWishlist(state) {
            state.toggleWishlist = !state.toggleWishlist
        }
    },
});

export const { toggleWishlist } = toggleWishlistSlice.actions;
export default toggleWishlistSlice.reducer;