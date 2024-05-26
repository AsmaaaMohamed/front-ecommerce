import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { TProduct } from "@customTypes/product";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetWishlistFullInfo } from "@store/wishlist/wishSlice";
import { useEffect } from "react";

const Wishlist = () => {
    const dispatch = useAppDispatch();
    const { loading, error, productsFullInfo } = useAppSelector(
        (state) => state.wishlist
    );
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    useEffect(()=>{
        dispatch(actGetWishlistFullInfo());
    },[dispatch]);
    const records = productsFullInfo.map((el) => ({
        ...el,
        quantity: cartItems[el.id],
        isLiked: true,
      }));
    
  return (
    <>
        <Heading>My Wishlist</Heading>
        <Loading status={loading} error={error}>
            {productsFullInfo.length >0 ?(
                <>
                    <GridList<TProduct>
                    records={records}
                    renderItem={(record) => <Product {...record} />}
                    />
                </>) :
        
            "My Wishlist is Empty"
            
            }
        </Loading>
    </>
  );
};

export default Wishlist;