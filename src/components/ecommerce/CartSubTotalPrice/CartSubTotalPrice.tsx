import { TProduct } from "@types";
import styles from "./styles.module.css";
const CartSubTotalPrice = ({cartItems}:{cartItems:TProduct[]}) => {
    const cartSubtotal = cartItems.reduce((total,product)=>{
    const price = product.price;
    const quantity = product.quantity;
    if(quantity && typeof quantity==="number")
      return total + quantity*price;
    else
      return total;
  }, 0);
  return (
    <div className={`d-flex justify-content-between ${styles.container}`}>
      <h5>SubTotal:</h5>
      <span>{cartSubtotal.toFixed(2)}</span>
    </div>
  )
};

export default CartSubTotalPrice;