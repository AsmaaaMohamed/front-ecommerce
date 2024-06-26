
import { Container } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import useCategories from "@hooks/useCategories";



const Categories = () => {
  const {loading , error , records} = useCategories();
  return (
    <>
     <Heading title="Categories"/>
      <Container>
        <Loading status={loading} error={error} type="category">
            <GridList records={records} renderItem={(record)=> <Category {...record}/>} emptyMessage="There are no categories"/>
        </Loading>
      </Container>
    </>
  );
};

export default Categories;