import { TProduct , TLoading, isString} from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlistFullInfo from "./act/actGetWishlistFullInfo";

interface IWishlistState{
    wishlistItemsId:number[];
    productsFullInfo: TProduct[];
    error:string | null;
    loading:TLoading;
}
const initialState:IWishlistState = {
    wishlistItemsId:[],
    productsFullInfo:[],
    error:null,
    loading:"idle"
}
const wishSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        productsFullInfoCleanUp: (state) => {
            state.productsFullInfo = [];
          },
    },
    extraReducers:(builder)=>{
        builder.addCase(actLikeToggle.pending , (state)=>{
            state.error=null;            
        })
        .addCase(actLikeToggle.fulfilled, (state, action) => {
            if(action.payload.type === "add"){
                state.wishlistItemsId.push(action.payload.id);
            }
            else{
                state.wishlistItemsId = state.wishlistItemsId.filter((id)=>id !==action.payload.id);
                state.productsFullInfo = state.productsFullInfo.filter(
                    (el) => el.id !== action.payload.id
                  );
            }

          })
        .addCase(actLikeToggle.rejected,(state, action)=>{
            if (action.payload && typeof action.payload === "string")
                state.error = action.payload;
        })
        .addCase(actGetWishlistFullInfo.pending , (state)=>{
            state.loading = "pending";
            state.error=null;            
        })
        .addCase(actGetWishlistFullInfo.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.productsFullInfo = action.payload;
          })
        .addCase(actGetWishlistFullInfo.rejected,(state, action)=>{
            if (isString(action.payload))
                state.error = action.payload;
        })
    }
});
export{actLikeToggle , actGetWishlistFullInfo};
export const { productsFullInfoCleanUp}= wishSlice.actions;
export default wishSlice.reducer;