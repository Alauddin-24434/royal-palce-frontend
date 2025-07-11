


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { setUser, logout } from '../features/auth/authSlice';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload, RefreshTokenResponse } from '@/types/auth.interface';

// Mutex to prevent multiple token refresh at once
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({

  baseUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`,

  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// 🔷 Base query wrapper with re-authentication
const baseQueryWithReauth: typeof baseQuery = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  // console.log("🔵 API Request Initiated:", args);

  let result = await baseQuery(args, api, extraOptions);

  // Token expired
  if (result?.error?.status === 401) {
    // console.warn("⚠️ 401 Unauthorized — trying to refresh token");

    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        // console.log("🔁 Attempting token refresh...");

        const refreshResult = await baseQuery(
          { url: '/users/refresh-token', method: 'POST' },
          api,
          extraOptions
        );

        console.log("🔁 Refresh Response:", refreshResult);

        const resultData = refreshResult.data as RefreshTokenResponse;

        if (resultData?.data?.accessToken) {
          const newToken = resultData.data.accessToken;
          const decodedUser = jwtDecode<JwtPayload>(newToken);

          // console.log("✅ Token refreshed. Retrying original request...");

          api.dispatch(setUser({ user: decodedUser, token: newToken }));
          result = await baseQuery(args, api, extraOptions);
        } else {
          // console.error("❌ Refresh token failed. Logging out...");
          api.dispatch(logout());
        }
      } finally {
        release();
      }
    } else {
      // console.log("⏳ Waiting for mutex unlock...");
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  // console.log("🟢 Final API Response:", result);
  return result;
};


// 🔵 Create base API
const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Room', 'Booking', 'User','Service', 'Testimonial', 'Dashboard', 'Payment'],
  endpoints: () => ({}),
});

export default baseApi;