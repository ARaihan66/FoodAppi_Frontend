import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./slices/CategorySlice";
import CartSlice from "./slices/CartSlice";


export const store = configureStore({
    reducer:{
        cart : CartSlice,
        category : CategorySlice
    }
})