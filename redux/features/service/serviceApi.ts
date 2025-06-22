import baseApi from "@/redux/api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createService: build.mutation({
      query: (body) => ({
        url: '/service',
        method: 'POST',
        body,
      }),
    }),
    findAllService: build.query({
      query: () => ({
        url: '/services',
        method: 'GET',
      }),
    }),
 
    updateService: build.mutation({
      query: ({ id ,formData}) => ({
        url: `/service/${id}`,
        method: 'PATCH',  // or PUT, depending on your API
        body:formData,
      }),
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `/service/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
useCreateServiceMutation,
useFindAllServiceQuery,
useDeleteServiceMutation,
useUpdateServiceMutation
} = serviceApi;

export default serviceApi;
