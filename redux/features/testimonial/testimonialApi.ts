import baseApi from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTestimonial: build.mutation({
      query: (body) => ({
        url: '/testimonial',
        method: 'POST',
        body,
      }),
      invalidatesTags: ["Testimonial"],
    }),
    findAllTestimonials: build.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: `/testimonials?page=${page}&limit=${limit}`,
        method: 'GET',
      }),
      providesTags: ["Testimonial"],
    }),

    findTestimonialsByRoomId: build.query({
      query: (id) => ({
        url: `/testimonial/${id}`,
        method: 'GET',
      }),
      providesTags: ["Testimonial"],
    }),
    deleteTestimonial: build.mutation({
      query: (id) => ({
        url: `/testimonial/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Testimonial"],
    }),

  }),

  overrideExisting: false,
});

export const {
  useCreateTestimonialMutation,
  useFindAllTestimonialsQuery,
  useFindTestimonialsByRoomIdQuery,
  useDeleteTestimonialMutation,
} = testimonialApi;

export default testimonialApi;
