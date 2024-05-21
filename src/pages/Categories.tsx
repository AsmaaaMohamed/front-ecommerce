
import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetCategories from "@store/categories/act/actGetCategories";


const Categories = () => {
  const dispatch = useAppDispatch();
  const{loading , error , records} = useAppSelector((state)=> state.categories);
  useEffect(()=>{
    if(records.length ===0)
      dispatch(actGetCategories());
  } , [dispatch]);
  const mappedCategories = records.length>0 ? records.map((record)=>{
  return(
    <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2" key={record.id}>
        <Category {...record}/>
      </Col>
  )}) : "There is no categories";
  return (
    <Container>
    <Row>
      {mappedCategories}
    </Row>
  </Container>
  );
};

export default Categories;