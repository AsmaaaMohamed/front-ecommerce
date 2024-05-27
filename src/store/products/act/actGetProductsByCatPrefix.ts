import { TProduct } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";

type TResponse = TProduct[];
const actGetProductsByCatPrefix = createAsyncThunk(
    "products/actGetProductsByCatPrefix" ,
    async(prefix:string ,thunkAPI)=>{
        const {rejectWithValue} = thunkAPI;
        try {
            const response = await axios.get<TResponse>(`/products?cat_prefix=${prefix}`);
            return response.data;
        } catch(error){
            return rejectWithValue(axiosErrorHandler(error) );
        }
});
export default actGetProductsByCatPrefix;