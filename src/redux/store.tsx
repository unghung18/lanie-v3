import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import toggleCartReducer from "./slices/toggleCartSlice";
import toggleQuickviewReducer from "./slices/toggleQuickviewSlice";
import toggleWishlistReducer from "./slices/toggleWishlistSlice";
import wishlistReducer from "./slices/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    toggleCart: toggleCartReducer,
    toggleWishlist: toggleWishlistReducer,
    toggleQuickview: toggleQuickviewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
