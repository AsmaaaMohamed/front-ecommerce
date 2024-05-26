import WishIcon from "@assets/svg/wishlist.svg?react";
import { useAppSelector } from "@store/hooks";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const {container,totalNum, pumpAnimate, iconWrapper} = styles;
const HeaderWishList = () => {
  const totalQuantity = useAppSelector(state=>state.wishlist.wishlistItemsId).length;
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
    <div className={container} onClick={()=>navigate("/wishlist")}>
      <div className={iconWrapper} onClick={()=>navigate('/wishlist')}>
        <WishIcon title="basketwish icon"/>
        {totalQuantity >0 &&(
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
        
      </div>
      <h3>Wishlist</h3>
    </div>
  );
};

export default HeaderWishList;