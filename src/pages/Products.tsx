
import { Container } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
import Loading from "@components/feedback/Loading/Loading";
import { GridList, Heading } from "@components/common";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const{loading , error , records} = useAppSelector((state)=> state.products);
  const cartItems = useAppSelector((state)=> state.cart.cartItems);
  const productsFullInfo = records?.map((el)=>({
    ...el,
    quantity: cartItems[el.id as number] || 0
  }))
  useEffect(()=>{
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return()=>{
      dispatch(productsCleanUp());
    }
  } , [dispatch, params.prefix]);
  return (
    <>
      <Heading><span className="text-capitalize">{params.prefix} </span>Products</Heading>
      <Container>
        <Loading status={loading} error={error}>
          <GridList records={productsFullInfo} renderItem={(record)=>(<Product {...record}/>)}/>
        </Loading>
      </Container>
    </>
  );
};

export default Products;