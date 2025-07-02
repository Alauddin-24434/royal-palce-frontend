// src/redux/api/baseApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import {  updateToken, logout } from '../features/auth/authSlice';

const mutex = new Mutex();
// https://royal-place-server.vercel.app
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://royal-place-server.vercel.app/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
      // console.log('🔐 Sending access token:', token);
    }
    return headers;
  },
});

const baseQueryWithReauth: typeof baseQuery = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    // console.warn('⚠️ Access token expired, trying refresh...');

    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          { url: '/users/refresh-token', method: 'POST' },
          api,
          extraOptions
        );

        // console.log('🔄 Refresh token response:', refreshResult);

        const newToken =
          (refreshResult.data as any)?.accessToken ||
          (refreshResult.data as any)?.data?.accessToken;

        if (newToken) {
          console.log('✅ Got new access token:', newToken);
        
        
          // শুধু token আপডেট করো, user আগের মতো থাকবে
          api.dispatch(updateToken(newToken));

          // Retry original request with new token
          result = await baseQuery(args, api, extraOptions);
        } else {
          // console.warn('⛔ Failed to refresh token, logging out');
          api.dispatch(logout());
        }
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
  tagTypes: ['Room', 'Booking', 'User', 'Testimonial', 'Dashboard', 'Payment'],
  endpoints: () => ({}),
});

export default baseApi;
