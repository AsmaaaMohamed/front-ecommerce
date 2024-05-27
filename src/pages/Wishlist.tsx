import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { TProduct } from "@types";
import useWishlist from "@hooks/useWishlist";

const Wishlist = () => {
    const {loading , error , productsFullInfo , records} = useWishlist();
    
  return (
    <>
        <Heading title="My Wishlist"/>
        <Loading status={loading} error={error}>
            {productsFullInfo.length >0 ?(
                <>
                    <GridList<TProduct>
                    records={records}
                    renderItem={(record) => <Product {...record} />}
                    />
                </>) :
        
            "My Wishlist is Empty"
            
            }
        </Loading>
    </>
  );
};

export default Wishlist;