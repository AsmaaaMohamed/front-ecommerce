
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
        <Loading status={loading} error={error}>
          <GridList records={productsFullInfo} renderItem={(record)=>(<Product {...record}/>)}/>
        </Loading>
      </Container>
    </>
  );
};

export default Products;