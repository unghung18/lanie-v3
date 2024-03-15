import { ProductProps } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface stateTypeProp {
    toggleQuickview: boolean;
    product: ProductProps;
}

const initialState: stateTypeProp = {
    toggleQuickview: false,
    product: {
        _id: "",
        category: "",
        title: "",
        images: [
        ],
        comments: [],
        price: 0,
        sale: 0,
        description: "",
        colors: [],
        sizes: [],
        quantity: 0,
        tag: ""
    }
};


const toggleQuickviewSlice = createSlice({
    name: "toggleQuickview",
    initialState,
    reducers: {
        toggleQuickview(state, actions) {

            console.log(actions.payload);

            const { toggle, product } = actions.payload;
            state.toggleQuickview = toggle;

            if (product) {
                state.product = product
            }
        }
    },
});

export const { toggleQuickview } = toggleQuickviewSlice.actions;
export default toggleQuickviewSlice.reducer;