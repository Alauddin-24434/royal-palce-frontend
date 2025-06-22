import baseApi from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTestimonial: build.mutation({
      query: (body) => ({
        url: '/testimonial',
        method: 'POST',
        body,
      }),
    }),
    findAllTestimonials: build.query({
      query: () => ({
        url: '/testimonials',
        method: 'GET',
      }),
    }),
    findTestimonialsByRoomId: build.query({
      query: (roomId) => ({
        url: `/testimonial/${roomId}`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateTestimonialMutation,
  useFindAllTestimonialsQuery,
  useFindTestimonialsByRoomIdQuery,
} = testimonialApi;

export default testimonialApi;
