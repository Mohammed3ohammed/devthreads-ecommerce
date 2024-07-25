import Products from "../../components/Products";
import { FetchProducts } from "../actions/getStripeProducts";




const Page = async () => {
    const products = await FetchProducts();
  return (  <Products allProducts={products} />
)
}

export default Page;

