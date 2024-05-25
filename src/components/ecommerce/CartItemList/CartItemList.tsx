import { TProduct } from "@customTypes/product"
import CartItem from "../CartItem/CartItem";

type cartITemListProps = {
    cartItems: TProduct[],
    changeQuantityHandler:(id:number , quantity:number)=>void,
    removeITemHandler:(id:number)=>void
};
const CartItemList = ({cartItems , changeQuantityHandler, removeITemHandler}:cartITemListProps) => {
    const mappedCartItems = cartItems.map((item)=>{
        return <CartItem {...item} key={item.id} changeQuantityHandler={changeQuantityHandler} removeITemHandler={removeITemHandler}/>
      })
  return (
    <div>
        {mappedCartItems}
    </div>
  )
}

export default CartItemList