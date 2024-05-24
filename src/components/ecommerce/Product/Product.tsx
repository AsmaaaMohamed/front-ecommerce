import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/product";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { memo, useEffect, useState } from "react";
const { product, productImg,maximumNotice } = styles;

const Product = memo(({ id,title ,max, price, quantity, img}:TProduct) => {
  const dispatch = useAppDispatch();
  const[isBtnDisabled , setIsBtnDisabled] = useState(false);
  const remainingQuantity = max - (quantity ?? 0);
  const quantityReachedMax = remainingQuantity <=0 ? true : false;
  const addToCartHandler=()=>{
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };
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