import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { TProduct } from "@types";
import useWishlist from "@hooks/useWishlist";

const Wishlist = () => {
    const {loading , error , records} = useWishlist();
    
  return (
    <>
        <Heading title="My Wishlist"/>
        <Loading status={loading} error={error}>      
        <GridList<TProduct>
            records={records}
            renderItem={(record)=> <Product {...record}/>}
            emptyMessage="My wishlist is empty" 
        />        
        </Loading>
    </>
  );
};

export default Wishlist;