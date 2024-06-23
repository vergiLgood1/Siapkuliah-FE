import { apiSlice } from "@/redux/services/api-slice";

interface MentorProps {
  id: string;
  user: {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    photo_profile: string;
    country: string;
    province: string;
    city: string; 
  };
  educations: {
    id: string;
    institution: string;
    degree: string;
    field_of_study: string;
    graduation_year: number;
  };
  specializations: {
    id: string;
    specialization: string;
  };
  availabilities: {
    id: string;
    day_of_week: string;
    start_time: string;
    end_time: string;
  }
  video_intro?: string | null;
  title?: string | null;
  bio: string;
  sippk: string;
  strpk: string;
  experience_years: number;
  rating?: number | null;
  total_reviews?: number;
  total_sessions?: number;
  linkedin?: string | null;
}

// interface EducationProps {
//   id?: string;
//   mentor: {
//     id: string;
//   }
//   institution?: string;
//   degree?: string;
//   field_of_study?: string | null;
//   graduation_year?: number;
// }

const mentorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllMentors: builder.query<MentorProps[], void>({
      query: () => "/mentors/",
    }),
    getMentorDetails: builder.query<MentorProps, string>({
      query: (id) => `/mentors/${id}/`,
    }),
    // getAllMentorEducation: builder.query<EducationProps[], void>({
    //   query: () => "/educations/",
    // }),
    // getMentorEducation: builder.query<EducationProps, string>({
    //   query: (id) => `/educations/${id}`,
    // }),
  }),
});

export const { 
  useGetAllMentorsQuery, 
  useGetMentorDetailsQuery, 
 } =
  mentorApiSlice;
