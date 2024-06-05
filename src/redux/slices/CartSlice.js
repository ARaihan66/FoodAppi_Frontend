import { createSlice } from "@reduxjs/toolkit";

const item = localStorage.getItem("cartItem") !== null ? JSON.parse(localStorage.getItem("cartItem")) : [] ;

const initialState = {
  cart: item,
};

export const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }

      localStorage.setItem("cartItem", JSON.stringify(state.cart))
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cartItem", JSON.stringify(state.cart))
    },
    incrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty += 1;
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cart))
    },
    decrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.qty > 1) {
        item.qty -= 1;
      } else if (item && item.qty === 1) {
        //state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        return;
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cart))
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
} = CartSlice.actions;

export default CartSlice.reducer;
