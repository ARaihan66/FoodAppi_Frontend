import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
}

export const CartSlice = createSlice({
    name:"CartSlice",
    initialState,
    reducers:{
        addToCart : (state, action)=>{
          const existedItem = state.cart.find((item)=> item.id === action.payload.id);

            if(existedItem){
                state.cart = state.cart.map((item)=>{
                    return item.id === action.payload.id ? {item, qty: item.qty + 1} : item;
                })
            }else{
                state.cart.push(action.payload);
            }
        }
    }
})