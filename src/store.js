import { configureStore } from "@reduxjs/toolkit";

import categorySlice from "./slices/categories.slice";
import colorSlice from "./slices/colors.slice";
import sizeSlice from "./slices/sizes.slice";
import cartSlice from "./slices/cart.slice";

const store = configureStore({
    reducer: {
        categories: categorySlice.reducer,
        colors: colorSlice.reducer,
        size: sizeSlice.reducer,
        cart: cartSlice.reducer,
    }
})



export default store 
