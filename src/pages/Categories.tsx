
import { Container } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetCategories from "@store/categories/act/actGetCategories";
import Loading from "@components/feedback/Loading/Loading";
import { GridList, Heading } from "@components/common";



const Categories = () => {
  const dispatch = useAppDispatch();
  const{loading , error , records} = useAppSelector((state)=> state.categories);
  useEffect(()=>{
    if(records.length ===0)
      dispatch(actGetCategories());
  } , [dispatch,records]);
  return (
    <>
      <Heading>Categories</Heading>
      <Container>
        <Loading status={loading} error={error}>
            <GridList records={records} renderItem={(record)=> <Category {...record}/>}/>
        </Loading>
      </Container>
    </>
  );
};

export default Categories;