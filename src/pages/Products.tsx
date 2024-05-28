
import { Container } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import Loading from "@components/feedback/Loading/Loading";
import { GridList, Heading } from "@components/common";
import useProducts from "@hooks/useProducts";

const Products = () => {
  const {loading , error ,productPrefix, productsFullInfo} = useProducts();
  return (
    <>
      <Heading title={`${productPrefix?.toUpperCase()} Products`} />
      <Container>
        <Loading status={loading} error={error} type="product">
          <GridList records={productsFullInfo} renderItem={(record)=>(<Product {...record}/>)} emptyMessage="There are no products"/>
        </Loading>
      </Container>
    </>
  );
};

export default Products;