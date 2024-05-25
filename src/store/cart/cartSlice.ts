import { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import actGetProductsById from "./act/actGetProductsById";
import { TLoading } from "@customTypes/shared";

interface ICartState{
    cartItems:{[key:number]:number};
    productsFullInfo: TProduct[];
    loading: TLoading;
    error:string | null;
    
}
const initialState:ICartState = {
    cartItems:{},
    productsFullInfo:[],
    loading:"idle",
    error:null
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state , action)=>{
            const id = action.payload;
            if(state.cartItems[id])
                state.cartItems[id]++;
            else
                state.cartItems[id] = 1;
        },
        cartItemChangeQuantity:(state,action)=>{
            state.cartItems[action.payload.id] = action.payload.selectedQuantity
        },
        cartItemRemove:(state,action)=>{
            delete state.cartItems[action.payload];
            state.productsFullInfo = state.productsFullInfo.filter((el)=>
            el.id !== action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(actGetProductsById.pending , (state)=>{
            state.loading = "pending";
            state.error=null;            
        })
        .addCase(actGetProductsById.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.productsFullInfo = action.payload;

          })
        .addCase(actGetProductsById.rejected,(state, action)=>{
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string")
                state.error = action.payload;
        })
    }
});
const getCartTotalQuantity = (state:RootState)=>{
    const {cartItems} = state.cart;
    const totalQuantity = Object.values(cartItems).reduce((acc,item)=>(acc + item) ,0);
    return totalQuantity;
}
export {getCartTotalQuantity};
export const {addToCart , cartItemChangeQuantity,cartItemRemove} = cartSlice.actions;
export default cartSlice.reducer;