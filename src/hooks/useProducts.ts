import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";
import { useParams } from "react-router-dom";

const useProducts = () => {
  const params = useParams();
  const productPrefix = params.prefix;
  const dispatch = useAppDispatch();
  const{loading , error , records} = useAppSelector((state)=> state.products);
  const cartItems = useAppSelector((state)=> state.cart.cartItems);
  const wishlistItemsId = useAppSelector((state)=> state.wishlist.wishlistItemsId);
  const productsFullInfo = records?.map((el)=>({
    ...el,
    quantity: cartItems[el.id as number] || 0,
    isLiked: wishlistItemsId.includes(el.id),
  }))
  useEffect(()=>{
    const promise = dispatch(actGetProductsByCatPrefix(productPrefix as string));
    return()=>{
      promise.abort();
      dispatch(productsCleanUp());
    }
  } , [dispatch, productPrefix]);
  return{loading , error ,productPrefix , productsFullInfo};
}
export default useProducts;