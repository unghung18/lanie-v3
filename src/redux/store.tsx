import { configureStore } from "@reduxjs/toolkit";
import toggleCartReducer from "./slices/toggleCartSlice";
import toggleWishlistReducer from "./slices/toggleWishlistSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        toggleCart: toggleCartReducer,
        toggleWishlist: toggleWishlistReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch