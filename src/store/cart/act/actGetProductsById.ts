import { TProduct } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axios from "axios";
import { axiosErrorHandler } from "@utils";

type TResponse = TProduct[];
const actGetProductsById = createAsyncThunk(
    "cart/actGetProductsById",
    async(_ , thunkAPI)=>{
        const{rejectWithValue ,fulfillWithValue, getState} = thunkAPI;
        const{cart} = getState() as RootState;
        const itemsId = Object.keys(cart.cartItems);
        if(!itemsId.length){
            return fulfillWithValue([]);
        }
        try{
            const concatenatedItemsId = itemsId.map((el)=>`id=${el}`).join('&');
            const response = await axios.get<TResponse>(`/products?${concatenatedItemsId}`);
            return response.data;
        }
        catch(error){
            return rejectWithValue(axiosErrorHandler(error) );
        }
    }
);
export default actGetProductsById;