"use client";

import { FaHeartCirclePlus } from "react-icons/fa6";
import { useWishlistStore } from "../../../../store/useWishlistSttore";
import { ProductType } from "../../../../types/ProductTypes";
import toast from "react-hot-toast";
import React from "react";

const AddToWishlistButton = ( {name , id, image, unit_amount, quantity } : ProductType ) => {

    const wishlistStore = useWishlistStore()
    const addToWishlist = () => {
        const existingItem = wishlistStore.wishList.find((wishItem) => wishItem.id === id)
        if (existingItem) {
            toast.error(`${name} is already in your wishlist`)
        } else {
            wishlistStore.addToWishlist({
                name, 
                id, 
                image,
                unit_amount,
                quantity: 1
            });
            toast.success(`${name} added wishlist`)
        }
    }

  return (
    <div onClick={addToWishlist}>
      <FaHeartCirclePlus 
      
      />
    </div>
  )
}

export default AddToWishlistButton;

