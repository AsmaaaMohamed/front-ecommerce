import CartIcon from "@assets/svg/cart.svg?react";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const {container,totalNum, pumpAnimate, iconWrapper} = styles;
const HeaderBasket = () => {
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const[isAnimate , setIsAnimate] = useState(false);
  const quantityStyle = `${totalNum} ${
    isAnimate ? pumpAnimate : ""
  }`;
  const navigate = useNavigate();
  useEffect(()=>{
    if (!totalQuantity)
      return;
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debounce);
  },[totalQuantity]);
  return (
    <div className={container} onClick={()=>navigate("/cart")}>
      <div className={iconWrapper}>
        <CartIcon title="basket icon"/>
        {totalQuantity >0 &&(
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderBasket;