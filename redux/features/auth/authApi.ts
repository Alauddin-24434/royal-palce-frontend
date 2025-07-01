// redux/api/authApi.ts
import baseApi from '@/redux/api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // ✅ Signup endpoint
    signUpUser: build.mutation({
      query: (body) => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
    }),

    // ✅ Login endpoint
    loginUser: build.mutation({
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),

    // ✅ Get current logged-in user
    getMe: build.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    // ✅ Get all users (admin only)
    getAllUsers: build.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    // ✅ Get single user by ID
    getSingleUser: build.query({
      query: (id: string) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useLoginUserMutation,
  useGetMeQuery,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
} = authApi;

export default authApi;
