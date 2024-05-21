
import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const{loading , error , records} = useAppSelector((state)=> state.products);
  useEffect(()=>{
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return()=>{
      dispatch(productsCleanUp());
    }
  } , [dispatch, params.prefix]);
  const mappedProducts = records.length>0 ? records.map((record)=>{
  return(
    <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
      <Product {...record}/>
    </Col>
  )}) : "There is no products";
  return (
    <Container>
      <Row>
        {mappedProducts}
      </Row>
    </Container>
  );
};

export default Products;