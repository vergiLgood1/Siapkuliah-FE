import { apiSlice } from "@/redux/services/api-slice";

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  photo_profile: string;
  country: string;
  province: string;
  city: string;
}

interface CheckoutProps {
  user: User;
  stripe_customer_id: string;
  stripe_checkout_session_id: string;
  stripe_price_id: string;
  has_access: boolean;
  is_completed: boolean;
}

const CheckoutApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        checkout: builder.mutation<CheckoutProps, void>({
            query: () => ({
                url: "/create-checkout-session/",
                method: "POST",
            }),
        }),
    }),
})

export const { useCheckoutMutation } = CheckoutApiSlice;
