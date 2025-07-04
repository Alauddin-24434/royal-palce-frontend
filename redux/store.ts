// redux/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '@/redux/features/auth/authSlice';
import cartReducer from '@/redux/features/cart/cartSlice';
import baseApi from './api/baseApi';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart'], // ✅ only persist auth
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
