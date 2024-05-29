import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    category : "All"
}

export const categorySlice = createSlice({
    name : "caterogy",
    initialState,
    reducers:{
        setCategory : (state, action)=>{
            state.category = action.payload;
        }

    }
})

export const {setCategory} = categorySlice.actions;

export default categorySlice.reducer;