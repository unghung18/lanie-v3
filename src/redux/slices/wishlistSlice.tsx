import { ProductProps } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

type initialStateProps = {
    wishlistItems: ProductProps[];
}

const initialState: initialStateProps = {
    wishlistItems: [],
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,

    reducers: {
        // =========== add item ============
        addWishlistItem(state: initialStateProps, action) {
            const newItem: ProductProps = action.payload;

            const existingItem = state.wishlistItems.find(
                (item) => item._id == newItem._id
            );

            if (!existingItem) {
                state.wishlistItems.push(newItem);
            }
            else {
                state.wishlistItems = state.wishlistItems.filter((item) => item._id !== newItem._id);
            }
        },

        //============ delete item ===========

        deleteWishlistItem(state: initialStateProps, action) {
            const id = action.payload;
            const existingItem = state.wishlistItems.find((item) => item._id === id);

            if (existingItem) {
                state.wishlistItems = state.wishlistItems.filter((item) => item._id !== id);
            }

        },
    },
});

export const { addWishlistItem, deleteWishlistItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
