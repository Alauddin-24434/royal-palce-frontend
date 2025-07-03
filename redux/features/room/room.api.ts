import baseApi from "@/redux/api/baseApi";

const roomApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createRoom: build.mutation({
      query: (body) => ({
        url: '/rooms',
        method: 'POST',
        body,
      }),
    }),
    findAllRooms: build.query({
      query: () => ({
        url: '/rooms',
        method: 'GET',
      }),
    }),
  filterAllRooms: build.query({
  query: (params) => {
    const queryParams = new URLSearchParams();

    if (params?.checkInDate) queryParams.append("checkInDate", params.checkInDate);
    if (params?.checkOutDate) queryParams.append("checkOutDate", params.checkOutDate);
    if (params?.adults) queryParams.append("adults", params.adults);
    if (params?.children) queryParams.append("children", params.children);
    if (params?.searchTerm) queryParams.append("searchTerm", params.searchTerm);
    if (params?.type) queryParams.append("type", params.type);
    if (params?.priceMin) queryParams.append("priceMin", String(params.priceMin));
    if (params?.priceMax) queryParams.append("priceMax", String(params.priceMax));
    if (params?.limit) queryParams.append("limit", String(params.limit));
    if (params?.page) queryParams.append("page", String(params.page));

    return {
      url: `/rooms/filter?${queryParams.toString()}`,
      method: "GET",
    };
  },
}),


    findSingleRoom: build.query({
      query: (id) => ({
        url: `/rooms/${id}`,
        method: 'GET',
      }),
    }),
    updateRoom: build.mutation({
      query: ({ id, ...formData }) => ({
        url: `/rooms/${id}`,
        method: 'PATCH',  // or PUT, depending on your API
        body: formData,
      }),
    }),
    deleteRoom: build.mutation({
      query: (id) => ({
        url: `/rooms/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateRoomMutation,
  useFindAllRoomsQuery,
  useFindSingleRoomQuery,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
  useFilterAllRoomsQuery
} = roomApi;

export default roomApi;
