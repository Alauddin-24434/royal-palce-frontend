//==== === redux/api/authApi.ts === ===//
import baseApi from '@/redux/api/baseApi';

//==== === Inject auth-related endpoints into baseApi === ===//
const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //==== === Signup user === ===//
    signUpUser: build.mutation({
      query: (body) => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
    }),

    //==== === Login user === ===//
    loginUser: build.mutation({
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),

    //==== === Get current logged-in user info === ===//
    getMe: build.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    //==== === Get all users (admin access) === ===//
    getAllUsers: build.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    //==== === Get a single user by ID === ===//
    getSingleUser: build.query({
      query: (id: string) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    //==== === Update a user (partial update with PATCH) === ===//
    updateUser: build.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

//==== === Export auto-generated hooks === ===//
export const {
  useSignUpUserMutation,
  useLoginUserMutation,
  useGetMeQuery,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
} = authApi;

export default authApi;
