import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantity } from "@store/cart/cartSlice";
import HeaderCounter from "../HeaderCounter/HeaderCounter";
import WishlistIcon from "@assets/svg/wishlist.svg?react";
import CartIcon from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";

const { headerLeftBar } = styles;

const HeaderLeftBar = () => {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.wishlistItemsId.length
  );
  const cartTotalQuantity = useAppSelector(getCartTotalQuantity);

  return (
    <div className={headerLeftBar}>
      <HeaderCounter
        to="wishlist"
        totalQuantity={wishlistTotalQuantity}
        svgIcon={<WishlistIcon title="wishlist" />}
      />
      <HeaderCounter
        to="cart"
        totalQuantity={cartTotalQuantity}
        svgIcon={<CartIcon title="cart" />}
      />
    </div>
  );
};

export default HeaderLeftBar;