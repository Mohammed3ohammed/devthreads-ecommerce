import { FetchProducts } from "@/app/actions/getStripeProducts"
import Link from "next/link";
import ProductsCard from "./ProductsCard";


const NewProducts = async () => {
const products = await FetchProducts();
const newArrivals = products.filter(
  (product) => product.metadata?.new === "true"
)


  return (
    <section className="py-10 border-t">
      <div className="main-container">
        <div className="flex- justify-between items-center">
        <h1 className="text-xl uppercase border-b border-gray-900 text-gray-900">
        New Arrivals
        </h1>
        <Link href={"/shop"} className="hover: underline">
        <span>View More &#8549;</span>
        </Link>
        </div>
        <div className="grid lg:grid-cols4 gap-5 grid-cols-2">
          {
            newArrivals.map((product) => (
              <ProductsCard 
              key={product.id}
              product={product}
              
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default NewProducts;
