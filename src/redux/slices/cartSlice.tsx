import { createSlice } from "@reduxjs/toolkit";

type cartItemsProps = {
    _id: string;
    category: string;
    title: string;
    images: string[];
    comments: any[];
    price: number;
    sale: number;
    description: string;
    colors: any[];
    sizes: string[];
    quantity: number;
    tag: string;
    selectedColor: string;
    selectedSize: string;
    selectedQuantity: number;
    selectedTotalPrice: number;
}

type initialStateProps = {
    cartItems: cartItemsProps[];
    totalQuantity: number;
    totalAmount: number;
}

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        // =========== add item ============
        addItem(state: initialStateProps, action) {
            const newItem: cartItemsProps = action.payload;

            console.log(newItem);

            const existingItem = state.cartItems.find(
                (item) => item._id == newItem._id
            );
            state.totalQuantity++;

            if (!existingItem) {
                state.cartItems.push({
                    ...newItem,
                    selectedTotalPrice: newItem.price * newItem.selectedQuantity,
                    selectedQuantity: newItem.selectedQuantity,
                    selectedColor: newItem.selectedColor,
                    selectedSize: newItem.selectedSize
                });
            } else {
                existingItem.selectedSize = newItem.selectedSize
                existingItem.selectedColor = newItem.selectedColor
                existingItem.selectedQuantity += newItem.selectedQuantity;
                existingItem.selectedTotalPrice =
                    Number(existingItem.selectedTotalPrice) + Number(newItem.price) * Number(newItem.selectedQuantity);
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.selectedQuantity),
                0
            );

        },

        // ========= remove item ========

        removeItem(state: initialStateProps, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item._id == id);
            state.totalQuantity--;

            if (existingItem && existingItem?.selectedQuantity > 1) {
                existingItem?.selectedQuantity - 1;
                existingItem.selectedTotalPrice = Number(existingItem?.selectedTotalPrice) - Number(existingItem?.price);
            } else {
                state.cartItems = state.cartItems.filter((item) => item._id !== id);
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.selectedQuantity),
                0
            );
        },

        //============ delete item ===========

        deleteItem(state: initialStateProps, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item._id === id);

            if (existingItem) {
                state.cartItems = state.cartItems.filter((item) => item._id !== id);
                state.totalQuantity = state.totalQuantity - existingItem.selectedQuantity;
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.selectedQuantity),
                0
            );
        },
    },
});

export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
