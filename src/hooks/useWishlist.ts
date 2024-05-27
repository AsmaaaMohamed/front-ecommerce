import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetWishlistFullInfo, productsFullInfoCleanUp } from "@store/wishlist/wishSlice";
import { useEffect } from "react";

const useWishlist = () => {
    const dispatch = useAppDispatch();
    const { loading, error, productsFullInfo } = useAppSelector(
        (state) => state.wishlist
    );
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    useEffect(()=>{
       const promise =  dispatch(actGetWishlistFullInfo());
       return()=>{
            promise.abort();
            dispatch(productsFullInfoCleanUp());
       }
    },[dispatch]);
    const records = productsFullInfo.map((el) => ({
        ...el,
        quantity: cartItems[el.id],
        isLiked: true,
      }));
      return{loading , error , productsFullInfo , records};
};
export default useWishlist;