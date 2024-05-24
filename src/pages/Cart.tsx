import CartItem from "@components/ecommerce/CartItem/CartItem"
import { Heading } from "@components/common"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useEffect } from "react";
import actGetProductsById from "@store/cart/act/actGetProductsById";

const Cart = () => {
  const dispatch = useAppDispatch();
  const{cartItems , productsFullInfo} = useAppSelector((state)=>state.cart);
  const cartItemsFullInfo = productsFullInfo.map((el)=>({
    ...el,
    quantity:cartItems[el.id]
  }));
  
const mappedCartItems = cartItemsFullInfo.map((item)=>{
  return <CartItem {...item} key={item.id}/>
})
  useEffect(()=>{
    dispatch(actGetProductsById());
  },[dispatch]);
  return (
    <>
      <Heading>Cart</Heading>
      {mappedCartItems}
    </>
  )
}

export default Cart