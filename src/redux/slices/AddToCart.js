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
                    return item.id === action.payload.id ? {item, qty: item.qty + 1} : null;
                })
            }else{
                state.cart.push(action.payload);
            }
        },

        removeFromCart: (state, action)=>{
           state.cart = state.cart.filter((item)=> item.id !== action.payload);
        },

        incrementQty:(state, action)=>{
          state.cart = state.cart.map((item)=>{
            return item.id === action.payload.id ? {...item, qty:item.qty + 1 } : null
          })
        },
        decrementQty:(state, action)=>{
            state.cart = state.cart.map((item)=>{
              return item.id === action.payload.id ? {...item, qty:item.qty - 1 } : null
            })
          },

        totalPrice : (state, action)=>{
             state.cart = state.cart.map((item)=>{
                return item.id === action.payload.id ? {...item, price: item.price * item.qty}
             })
          }
    }
})


// Action creators are generated for each case reducer function
export const {
    addToCart,
    removeFromCart,
    incrementQty,
    decrementQty,
    totalPrice,
  } = CartSlice.actions;
  
  export default CartSlice.reducer;
  


