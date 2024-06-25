// src/pages/checkout.tsx
'use client'

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useCheckoutMutation } from "@/redux/api/checkout/checkout-api";
import { Button } from "@/components/ui/button";
import { API_URL } from "@/lib";

const CheckoutButton = () => {
//   const [priceId, setPriceId] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [createCheckoutSession, { isLoading }] = useCheckoutMutation();

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

//   const handleCheckout = async () => {
//     try {
//       const session = await createCheckoutSession({
//         price_id: priceId,
//         quantity,
//       }).unwrap();
//       const stripe = await stripePromise;
//       await stripe?.redirectToCheckout({ sessionId: session.id });
//     } catch (error) {
//       console.error("Error creating checkout session:", error);
//     }
//   };

  return (
    <form action={`${API_URL}/api/create-checkout-session`} method='POST'>
      <div className="flex items-center justify-center">
        <Button type="submit">
          Checkout
        </Button>
      </div>
    </form>
  );
};

export default CheckoutButton;
