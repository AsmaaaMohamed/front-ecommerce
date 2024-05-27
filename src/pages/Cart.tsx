import { Heading } from "@components/common"
import Loading from "@components/feedback/Loading/Loading";
import { CartItemList, CartSubTotalPrice } from "@components/ecommerce";
import useCart from "@hooks/useCart";

const Cart = () => {
  const{cartItemsFullInfo,changeQuantityHandler, removeITemHandler, loading , error} = useCart();
  return (
    <>
      <Heading title="My Cart"/>
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