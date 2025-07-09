import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { logout } from '../features/auth/authSlice';

//==== === Create a mutex to handle concurrent refresh token requests === ===//
const mutex = new Mutex();

//==== === Base query with default config === ===//
const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  credentials: 'include', // Send HttpOnly cookies with every request
  prepareHeaders: (headers) => {
    // Token is not manually set; handled via cookies
    return headers;
  },
});

//==== === Wrapper to handle re-authentication on 401 errors === ===//
const baseQueryWithReauth: typeof baseQuery = async (
  args,
  api,
  extraOptions,
) => {
  //==== === Wait if another refresh request is in progress === ===//
  await mutex.waitForUnlock();

  //==== === Perform the original request === ===//
  let result = await baseQuery(args, api, extraOptions);

  //==== === If unauthorized, try refreshing the token === ===//
  if (result?.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        //==== === Attempt to refresh access token === ===//
        const refreshResult = await baseQuery(
          { url: '/users/refresh-token', method: 'POST' },
          api,
          extraOptions,
        );

        if (refreshResult?.error) {
          //==== === Refresh failed, force logout === ===//
          api.dispatch(logout());
          release();
          return refreshResult;
        }

        //==== === Retry the original request after refresh === ===//
        result = await baseQuery(args, api, extraOptions);
      } finally {
        release();
      }
    } else {
      //==== === Wait for refresh to complete, then retry === ===//
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

//==== === Create RTK Query API with tags and custom base query === ===//
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
  endpoints: () => ({}), // Define endpoints in feature-specific APIs
});

export default baseApi;
