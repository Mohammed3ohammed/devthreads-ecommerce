"use client";
import { loadStripe,  StripeElementsOptions} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCheckoutStore } from "../../../../../../store/useChekoutStore";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CartEntry as ICarEntry } from "use-shopping-cart/core";
import toast from "react-hot-toast";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  process.env.Next_PUPLIC_STRIPE_PLUBLISHABLE_KEY  as string
)


const Checkout = ({items, totalPrice}: {totalPrice: number | undefined; items: ICarEntry[];}) => {
  const router = useRouter();
  const checkoutStore  = useCheckoutStore();
  const [clientSecret, setClientSecret] = useState("");

      useEffect (() => {
        const createOrder = async () => {
          try {
            const response = await fetch ("/api/create-order", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({
                items: items,
                payment_intent_id: checkoutStore.paymentIntent,
                totalAmount: totalPrice
              }),
            });
              if(response.status === 403) {
                toast.error("Please Sign In")
                router.push("/sign-in")
                checkoutStore.setCheckout("cart")
                return
              }

              if (!response.ok) {
                throw new Error ("network issues")
              }
              const data = await response.json()
              if (data && data.paymentIntent) {
                setClientSecret(data.paymentIntent.ckient_secret)
                checkoutStore.setPaymentIntent(data.paymentIntent.id)
              } else {
                  console.error("unexpected data structure", data)
              }
          } catch (error) {
              console.error(error)
          }
        };
        createOrder();
      }, [items, totalPrice, checkoutStore, router]); 

      const options:  StripeElementsOptions = {
        clientSecret,
        appearance: {
          theme: "stripe",
          labels: "floating"
        },
      };


  return (
   clientSecret && (
    <Elements
    options={options}
    stripe={stripePromise}
    >

      <CheckoutForm clientSecret={clientSecret} />

    </Elements>
   )
  )
}; 

export default Checkout;
