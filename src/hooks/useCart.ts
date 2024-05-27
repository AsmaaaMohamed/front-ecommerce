import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";
import actGetProductsById from "@store/cart/act/actGetProductsById";
import { cartItemChangeQuantity, cartItemRemove, cleanCartProductsFullInfo } from "@store/cart/cartSlice";

const useCart = () => {
  const dispatch = useAppDispatch();
  const{cartItems , productsFullInfo, loading, error} = useAppSelector((state)=>state.cart);
  const cartItemsFullInfo = productsFullInfo.map((el)=>({
    ...el,
    quantity:cartItems[el.id]
  }));
 const changeQuantityHandler = useCallback((id:number , selectedQuantity:number):void=>{
  dispatch(cartItemChangeQuantity({id,selectedQuantity}));
 },[dispatch]);
 const removeITemHandler = useCallback((id:number):void=>{
    dispatch(cartItemRemove(id));
 },[dispatch]);
  useEffect(()=>{
    const promise = dispatch(actGetProductsById());
    return()=>{
      promise.abort();
      dispatch(cleanCartProductsFullInfo());
    }
  },[dispatch]);
  return{cartItemsFullInfo,changeQuantityHandler, removeITemHandler, loading , error};
}
export default useCart;