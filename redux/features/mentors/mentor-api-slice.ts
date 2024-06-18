import { apiSlice } from "@/redux/services/api-slice";

const mentorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllMentors: builder.query({
      query: () => "/mentors/",
    }),
    getMentorDetails: builder.query({
      query: (id: string) => `/mentors/${id}/`,
    }),
  }),
});

export const { 
    useGetAllMentorsQuery, 
    useGetMentorDetailsQuery 
} = mentorApiSlice;
