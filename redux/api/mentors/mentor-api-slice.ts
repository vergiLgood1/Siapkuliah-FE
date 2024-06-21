import { apiSlice } from "@/redux/services/api-slice";

interface MentorProps {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  image?: string;
  education?: string;
  bio?: string;
  experience_years?: number;
  subjects?: string;
  total_reviews?: number;
  total_students?: number;
  linkedin?: string;
  date_joined?: string;
}

const mentorApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllMentors: builder.query<MentorProps[], void>({
      query: () => "/mentors/",
    }),
    getMentorDetails: builder.query<MentorProps, string>({
      query: (id) => `/mentors/${id}/`,
    }),
  }),
});

export const { 
  useGetAllMentorsQuery, 
  useGetMentorDetailsQuery 
} = mentorApiSlice;
