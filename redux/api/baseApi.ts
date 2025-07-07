import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { logout } from '../features/auth/authSlice';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  credentials: 'include', // Required to send HttpOnly cookies
  prepareHeaders: (headers) => {
    // Since the token is not accessible from client JS, do not add token to headers
    return headers;
  },
});

const baseQueryWithReauth: typeof baseQuery = async (
  args,
  api,
  extraOptions,
) => {
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        // Try to get a new Access Token using the Refresh Token
        const refreshResult = await baseQuery(
          { url: '/users/refresh-token', method: 'POST' },
          api,
          extraOptions,
        );

        if (refreshResult?.error) {
          // If refresh token is invalid, log out the user
          api.dispatch(logout());
          release();
          return refreshResult;
        }

        // New Access Token is set as HttpOnly cookie by the server, no need to update client state

        // Retry the original request with new token (cookie will be sent automatically)
        result = await baseQuery(args, api, extraOptions);
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    'Room',
    'Booking',
    'User',
    'Testimonial',
    'Dashboard',
    'Payment',
    'Service',
  ],
  endpoints: () => ({}),
});

export default baseApi;
