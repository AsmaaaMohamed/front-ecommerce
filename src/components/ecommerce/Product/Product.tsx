import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/product";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { memo, useEffect, useState } from "react";
import Like from '@assets/svg/like.svg?react';
import LikeFill from '@assets/svg/like-fill.svg?react';
import { actLikeToggle } from "@store/wishlist/wishSlice";

const { product, productImg,maximumNotice , wishListBtn} = styles;

const Product = memo(({ id,title ,max, price, quantity, img,isLiked}:TProduct) => {
  const dispatch = useAppDispatch();
  const[isBtnDisabled , setIsBtnDisabled] = useState(false);
  const[isLoading , setIsLoading] = useState(false);
  const remainingQuantity = max - (quantity ?? 0);
  const quantityReachedMax = remainingQuantity <=0 ? true : false;
  const addToCartHandler=()=>{
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };
  const likeTogleHandler=()=>{
    if(!isLoading){
    setIsLoading(true);
    dispatch(actLikeToggle(id)).unwrap()
    .then(()=> setIsLoading(false))
    .catch(()=> setIsLoading(false));
  }}
  useEffect(()=>{
    if (!isBtnDisabled) {
      return;
    }

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  },[isBtnDisabled]);
  return (
    <div className={product}>
      <div className={wishListBtn} onClick={likeTogleHandler}>
       {isLoading?<Spinner size="sm"/> :isLiked ? <LikeFill/> : <Like/>}
      </div>
      <Link to={``}>
        <div className={productImg}>
          <img
            src={img}
            alt={title}
          />
        </div>
        <h2>{title}</h2>
        <h3>{price.toFixed(2)} EGP</h3>
        <p className={maximumNotice}>
          {quantityReachedMax
            ? "You reach to the limit"
            : `You can add ${remainingQuantity} item(s)`}
        </p>
      </Link>
      <Button variant="info" style={{ color: "white" }} onClick={addToCartHandler} disabled={isBtnDisabled || quantityReachedMax}>
        {isBtnDisabled ? <><Spinner size="sm"/> loading...</> : <>Add to cart</>}
      </Button>
    </div>
  );
});

export default Product;