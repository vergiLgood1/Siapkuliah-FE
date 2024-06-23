import { apiSlice } from "@/redux/services/api-slice";

interface PricingSessionProps {
  id: string;
  name: string;
  price: number;
  sessions_included: number;
  validity_days: number;
}

const pricingSessionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPricingSessions: builder.query<PricingSessionProps[], void>({
      query: () => "/pricingsessions/",
    }),
    getPricingSessionDetails: builder.query<PricingSessionProps, string>({
      query: (id) => `/pricingsessions/${id}/`,
    }),
  }),
});

export const {
  useGetAllPricingSessionsQuery,
  useGetPricingSessionDetailsQuery,
} = pricingSessionApiSlice;
