import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userdata: [],
    // booking : []
}



const productState = createSlice({
    name: "Product",
    initialState,
    reducers:{
        alluserdata: (state, {payload})=>{
            state.userdata = payload
            // console.log("this is my data", payload)
        },

        logOut: (state,)=>{
            state.userdata = []
            // console.log("this is my data", payload)
        }
    }
})

export const {alluserdata, logOut} = productState.actions;
export default productState.reducer


// ProductState File