import baseApi from "@/redux/api/baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPayments: build.query({
      query: (params) => {
    
        const query = new URLSearchParams();

        if (params?.page) query.append("page", params.page.toString());
        if (params?.limit) query.append("limit", params.limit.toString());
        if (params?.status) query.append("status", params.status);
        if (params?.searchTerm) query.append("searchTerm", params.searchTerm);

        return {
          url: `/payments?${query.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Payment"],
    }),
  }),
});

export const { useGetPaymentsQuery } = paymentApi;
