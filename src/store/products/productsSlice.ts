import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@customTypes/shared";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import { TProduct } from "@customTypes/product";

interface IProductsState{
    records: TProduct[];
    loading: TLoading;
    error: string | null;
}
const initialState: IProductsState={
    records:[],
    loading:'idle',
    error:null
};
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        productsCleanUp:(state) =>{
            state.records = [];
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(actGetProductsByCatPrefix.pending , (state)=>{
            state.loading ="pending";
            state.error = null;
        });
        builder.addCase(actGetProductsByCatPrefix.fulfilled , (state, action)=>{
            state.loading ="succeeded";
            state.records = action.payload;
            state.error = null;
        });
        builder.addCase(actGetProductsByCatPrefix.rejected , (state , action)=>{
            state.loading ="failed";
            if(action.payload && typeof action.payload === 'string')
                state.error = action.payload;
        });
    }
});
export const{productsCleanUp} = productsSlice.actions;
export {actGetProductsByCatPrefix};
export default productsSlice.reducer;