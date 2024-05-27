import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";

const actLikeToggle = createAsyncThunk(
    "wishlist/actLikeToggle",
    async(id:number , thunkAPI)=>{
        const{rejectWithValue } = thunkAPI;
       
        try{
            const searchRecordInWishlist = await axios.get(`/wishlist?userId=1&productId=${id}`);
            if(searchRecordInWishlist.data.length > 0){
                await axios.delete(`/wishlist/${searchRecordInWishlist.data[0].id}`);
                return{type:"remove" , id};
            }
            else{
                await axios.post("/wishlist",{userId:"1" , productId:id});
                return{type:"add", id};
            }
        }
        catch(error){
            return rejectWithValue(axiosErrorHandler(error) );
        }
    }
);
export default actLikeToggle;