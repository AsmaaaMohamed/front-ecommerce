import { TProduct } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";

type TResponse = TProduct[];
const actGetWishlistFullInfo = createAsyncThunk(
    "wishlist/actGetWishlistFullInfo",
    async(_, thunkAPI)=>{
        const {rejectWithValue, fulfillWithValue} = thunkAPI;
        try {
            const userWishlist = await axios.get<{ productId: number }[]>("/wishlist?userId=1");
            if(!userWishlist.data.length)
                return fulfillWithValue([]);
            const concatenatedItemsId = userWishlist.data.map(el=>`id=${el.productId}`).join('&');
            const response = await axios.get<TResponse>(
                `/products?${concatenatedItemsId}`
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error) );
        }
    }
);
export default actGetWishlistFullInfo;