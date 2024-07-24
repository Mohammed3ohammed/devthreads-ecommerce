import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { useWishlistStore } from "../../../../store/useWishlistSttore";

const WishlistIcon = () => {
const wishlistStore = useWishlistStore ()


  return (
    <div>
       <Link href={"/wishlist"} className={`${wishlistStore.wishList.length > 0 ? "text-red-700" : null}`}>
       <AiOutlineHeart />
       </Link>
    </div>
  )
}

export default WishlistIcon;
