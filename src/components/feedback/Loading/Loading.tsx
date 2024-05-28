import { TLoading } from "@types";
import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";
import LottieHandler from "../LottieHandler/LottieHandler";

const skeletonsTypes = {
    category: CategorySkeleton,
    product: ProductSkeleton,
    cart: CartSkeleton,
  };
interface LoadingProps{
    status: TLoading;
    error: null | string;
    children: React.ReactNode,
    type?: keyof typeof skeletonsTypes;
}
const Loading =  ({status , error , children, type="category"}: LoadingProps)=>{
    const Component = skeletonsTypes[type];
    if(status === "pending")
        return(<Component/>);
    else if(status === "failed")
        return(
            <div>
                <LottieHandler type="error" message={error as string} />
            </div>)
    return <>{children}</>;
};
export default Loading;