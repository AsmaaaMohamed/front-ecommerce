import { Heading } from "@components/common"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useCallback, useEffect } from "react";
import actGetProductsById from "@store/cart/act/actGetProductsById";
import Loading from "@components/feedback/Loading/Loading";
import { CartItemList, CartSubTotalPrice } from "@components/ecommerce";
import { cartItemChangeQuantity, cartItemRemove } from "@store/cart/cartSlice";

const Cart = () => {
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
    dispatch(actGetProductsById());
  },[dispatch]);
  return (
    <>
      <Heading>My Cart</Heading>
      <Loading status={loading} error={error}>
        {cartItemsFullInfo.length >0 ?(
          <>
            <CartItemList cartItems={cartItemsFullInfo} changeQuantityHandler={changeQuantityHandler} removeITemHandler={removeITemHandler}/>
            <CartSubTotalPrice cartItems={cartItemsFullInfo}/>
          </>) :
        "My Cart is Empty"
        }
      </Loading>
    </>
  );
};

export default Cart;