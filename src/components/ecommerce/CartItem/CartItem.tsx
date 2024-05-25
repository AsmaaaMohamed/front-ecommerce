import { Button, Form } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/product";
const{cartItem,product, productImg, productInfo, cartItemSelection} = styles;


const CartItem = ({title , price, img}:TProduct) => {
  
  return (
    <div className={cartItem}>
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <div className={productInfo}>
        <h2>{title}</h2>
        <h3>{price.toFixed(2)} EGP</h3>
        <Button
          variant="secondary"
          style={{ color: "white", width: "100px" }}
          className="mt-auto"
        >
          Remove
        </Button>
      </div>
    </div>

    <div className={cartItemSelection}>
      <span className="d-block mb-1">Quantity</span>
      <Form.Select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Form.Select>
    </div>
  </div>
);
}

export default CartItem