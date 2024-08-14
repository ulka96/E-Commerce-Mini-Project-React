import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const cartItem = action.payload;
        },
        removeFromCart: (state, action) => {},
        increaseProductAmount: (state, action) => {},
        decreaseProductAmount: (state, action) => {}
    }
})

export default cartSlice
export const {addToCart, removeFromCart, increaseProductAmount, decreaseProductAmount } = cartSlice.actions