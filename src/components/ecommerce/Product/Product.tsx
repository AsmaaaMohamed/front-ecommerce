import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/product";
import { Link } from "react-router-dom";
const { product, productImg } = styles;

const Product = ({ title , price, cat_prefix,img}:TProduct) => {
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
        <h3>{price} EGP</h3>
      </Link>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;