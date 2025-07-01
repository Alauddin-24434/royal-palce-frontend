import baseApi from "@/redux/api/baseApi";

const dashboardApi= baseApi.injectEndpoints({
    endpoints: (build)=>({
        getDashboardData: build.query({
            query: () => ({
                url: "/dashboards",
                method: "GET",
            }),
            providesTags: ["Dashboard"],
        }),
    })
})



export const { useGetDashboardDataQuery } = dashboardApi;