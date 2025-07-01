// redux/api/bookingApi.ts

import baseApi from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // ✅ Initiate Booking
    bookingInitiate: build.mutation({
      query: (body) => ({
        url: "/bookings",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Booking"],
    }),

    // ✅ Cancel Booking
    cancelBooking: build.mutation({
      query: (id: string) => ({
        url: `/bookings/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Booking"],
    }),

    // ✅ Get All Bookings with filter (query param based)
    getAllBookings: build.query({
      query: (params?: Record<string, any>) => ({
        url: "/bookings",
        method: "GET",
        params,
      }),
      providesTags: ["Booking"],
    }),

    // ✅ Get Booking by ID (or check availability)
    getBookingById: build.query({
      query: (id: string) => ({
        url: `/bookings/${id}`,
        method: "GET",
      }),
      providesTags: ["Booking"],
    }),
  }),
});

export const {
  useBookingInitiateMutation,
  useCancelBookingMutation,
  useGetAllBookingsQuery,
  useGetBookingByIdQuery,
} = bookingApi;

export default bookingApi;
