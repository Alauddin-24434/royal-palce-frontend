// ====================================================
// 🧾 RTK Query Base API with Refresh Token Handling & Mutex Lock
// ====================================================

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { logout } from '../features/auth/authSlice';

// ==== Mutex to prevent concurrent refresh token requests ====
const mutex = new Mutex();

// ==== Base query config (default) ====
const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  credentials: 'include', // Send HttpOnly cookies automatically
  prepareHeaders: (headers) => {
    // No manual token header here since cookies used for auth
    return headers;
  },
});

// ==== Wrapper to handle token refresh on 401 errors ====
const baseQueryWithReauth: typeof baseQuery = async (
  args,
  api,
  extraOptions,
) => {
  // Wait if another refresh request is already in progress
  await mutex.waitForUnlock();

  // Perform the original request
  let result = await baseQuery(args, api, extraOptions);

  // If 401 Unauthorized, try to refresh token
  if (result?.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        // Attempt token refresh
        const refreshResult = await baseQuery(
          { url: '/users/refresh-token', method: 'POST' },
          api,
          extraOptions,
        );

        if (refreshResult?.error) {
          // Refresh failed, logout user
          api.dispatch(logout());
          release();
          return refreshResult;
        }

        // Retry original request after successful refresh
        result = await baseQuery(args, api, extraOptions);
      } finally {
        release();
      }
    } else {
      // Wait for ongoing refresh to complete, then retry
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

// ==== Create RTK Query API slice with custom base query and tags ====
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
  endpoints: () => ({}), // Feature endpoints injected elsewhere
});

export default baseApi;
