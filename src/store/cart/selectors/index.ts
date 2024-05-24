import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

const getCartItems = (state:RootState)=> state.cart.cartItems;
export const getCartTotalQuantitySelector = createSelector(getCartItems , 
    (cartItems)=>{ return Object.values(cartItems).reduce((acc,item)=>(acc + item) ,0)}
);
