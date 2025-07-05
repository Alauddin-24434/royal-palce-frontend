import baseApi from '@/redux/api/baseApi';

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createService: build.mutation({
      query: (body) => ({
        url: '/services',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Service'],
    }),
    findAllService: build.query({
      query: () => ({
        url: '/services',
        method: 'GET',
      }),
      providesTags: ['Service'],
    }),

    updateService: build.mutation({
      query: ({ id, formData }) => ({
        url: `/services/${id}`,
        method: 'PATCH', // or PUT, depending on your API
        body: formData,
      }),
      invalidatesTags: ['Service'],
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Service'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateServiceMutation,
  useFindAllServiceQuery,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} = serviceApi;

export default serviceApi;
